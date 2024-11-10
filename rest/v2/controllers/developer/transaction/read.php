<?php
$conn = null;
$conn = checkDbConnection();
$transaction = new Transaction($conn);
// $error = [];
// $returnData = [];
if (array_key_exists("transactionid", $_GET)) {
    $transaction->transaction_aid = $_GET['transactionid'];
    checkId($transaction->transaction_aid);
    $query = checkReadById($transaction);
    http_response_code(200);
    getQueriedData($query);
}

if (empty($_GET)) {
    $query = checkReadAll($transaction);
    http_response_code(200);
    getQueriedData($query);
}

checkEndpoint();
