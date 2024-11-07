<?php
$conn = null;
$conn = checkDbConnection();
$toppings = new Toppings($conn);

if (array_key_exists("toppingsid", $_GET)) {
    checkEndpoint();
} 

checkPayload($data);

$toppings->toppings_title = checkIndex($data, "toppings_title");
$toppings->toppings_price = checkIndex($data, "toppings_price");
$toppings->toppings_description = checkIndex($data, "toppings_description");

$toppings->toppings_is_active = 1;
$toppings->toppings_created = date("Y-m-d H:i:s");
$toppings->toppings_datetime = date("Y-m-d H:i:s");


isNameExist($toppings, $toppings->toppings_title);

$query = checkCreate($toppings);
returnSuccess($toppings, "toppings", $query);