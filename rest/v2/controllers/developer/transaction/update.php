<?php
$conn = null;
$conn = checkDbConnection();
$transaction = new Transaction($conn);
// $error = [];
// $returnData = [];
if (array_key_exists("transactionid", $_GET)) {
    checkPayload($data);

    $transaction->transaction_aid = $_GET['transactionid'];
    $transaction->transaction_cart_dessertCart = checkIndex($data, "transaction_cart_dessertCart");
    $transaction->transaction_cart_drinks = checkIndex($data, "transaction_cart_drinks");
    $transaction->transaction_cart_ramen = checkIndex($data, "transaction_cart_ramen");
    $transaction->transaction_cart_toppings = checkIndex($data, "transaction_cart_toppings");
    $transaction->transaction_change = checkIndex($data, "transaction_change");
    $transaction->transaction_mop = checkIndex($data, "transaction_mop");
    $transaction->transaction_payment = checkIndex($data, "transaction_payment");
    $transaction->transaction_subtotal = checkIndex($data, "transaction_subtotal");
    $transaction->transaction_finaltotal = checkIndex($data, "transaction_finaltotal");

    $transaction->transaction_datetime = date("Y-m-d H:i:s");
    $transaction_title_old = strtolower($data["transaction_title_old"]);
    checkId($transaction->transaction_aid);

    $query = checkUpdate($transaction);
    returnSuccess($transaction, "transaction", $query);
}

checkEndpoint();
