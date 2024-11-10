<?php
$conn = null;
$conn = checkDbConnection();
$transaction = new Transaction($conn);

if (array_key_exists("transactionid", $_GET)) {
    checkEndpoint();
}

checkPayload($data);

$transaction->transaction_cart_dessertCart = json_encode($data["transaction_cart_dessertCart"]);
$transaction->transaction_cart_drinks = json_encode($data["transaction_cart_drinks"]);
$transaction->transaction_cart_ramen = json_encode($data["transaction_cart_ramen"]);
$transaction->transaction_cart_toppings = json_encode($data["transaction_cart_toppings"]);
$transaction->transaction_change = checkIndex($data, "transaction_change");
$transaction->transaction_mop = checkIndex($data, "transaction_mop");
$transaction->transaction_payment = checkIndex($data, "transaction_payment");
$transaction->transaction_subtotal = checkIndex($data, "transaction_subtotal");
$transaction->transaction_finaltotal = checkIndex($data, "transaction_finaltotal");

$transaction->transaction_is_active = 1;
$transaction->transaction_created = date("Y-m-d H:i:s");
$transaction->transaction_datetime = date("Y-m-d H:i:s");


$query = checkCreate($transaction);
returnSuccess($transaction, "transaction", $query);
