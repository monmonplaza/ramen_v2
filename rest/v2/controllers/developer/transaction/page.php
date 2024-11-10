<?php
// set http header
require '../../../core/header.php';
// use needed functions
require '../../../core/functions.php';
// use needed classes
require '../../../models/developer/Transaction.php';
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$transaction = new Transaction($conn);
$response = new Response();
// validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();

    if (array_key_exists("start", $_GET)) {
        // get data
        $transaction->transaction_start = $_GET['start'];
        $transaction->transaction_total = 15;
        checkLimitId($transaction->transaction_start, $transaction->transaction_total);
        $query = checkReadLimit($transaction);
        $total_result = checkReadAll($transaction);
        http_response_code(200);
        checkReadQuery(
            $query,
            $total_result,
            $transaction->transaction_total,
            $transaction->transaction_start
        );
    }
    checkEndpoint();
}

http_response_code(200);
checkAccess();
