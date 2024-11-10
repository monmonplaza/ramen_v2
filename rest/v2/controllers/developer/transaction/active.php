<?php

require '../../../core/header.php';
require '../../../core/functions.php';
require '../../../models/developer/Transaction.php';

$conn = null;
$conn = checkDbConnection();
$transaction = new Transaction($conn);
$response = new Response();

$body = file_get_contents("php://input");
$data = json_decode($body, true);

$error = [];
$returnData = [];

if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();
    if (array_key_exists("transactionid", $_GET)) {

        checkPayload($data);
        $transaction->transaction_aid = $_GET['transactionid'];
        $transaction->transaction_is_active = trim($data["isActive"]);
        $transaction->transaction_datetime = date("Y-m-d H:i:s");

        checkId($transaction->transaction_aid);
        $query = checkActive($transaction);
        http_response_code(200);
        returnSuccess($transaction, "transaction", $query);
    }

    checkEndpoint();
}

http_response_code(200);
checkAccess();
