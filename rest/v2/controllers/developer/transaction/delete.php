<?php
$conn = null;
$conn = checkDbConnection();
$transaction = new Transaction($conn);
// $error = [];
// $returnData = [];
if (array_key_exists("transactionid", $_GET)) {
    $transaction->transaction_aid = $_GET['transactionid'];
    checkId($transaction->transaction_aid);
    // isAssociated($transaction);
    $query = checkDelete($transaction);
    returnSuccess($transaction, "transaction", $query);
}

checkEndpoint();
