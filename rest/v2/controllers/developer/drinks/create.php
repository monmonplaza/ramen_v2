<?php
$conn = null;
$conn = checkDbConnection();
$drinks = new Drinks($conn);

if (array_key_exists("drinksid", $_GET)) {
    checkEndpoint();
} 

checkPayload($data);

$drinks->drinks_title = checkIndex($data, "drinks_title");
$drinks->drinks_price = checkIndex($data, "drinks_price");
$drinks->drinks_description = checkIndex($data, "drinks_description");
$drinks->drinks_category = checkIndex($data, "drinks_category");

$drinks->drinks_is_active = 1;
$drinks->drinks_created = date("Y-m-d H:i:s");
$drinks->drinks_datetime = date("Y-m-d H:i:s");


isNameExist($drinks, $drinks->drinks_title);

$query = checkCreate($drinks);
returnSuccess($drinks, "drinks", $query);