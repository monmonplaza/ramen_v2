<?php
$conn = null;
$conn = checkDbConnection();
$dessert = new Dessert($conn);

if (array_key_exists("dessertid", $_GET)) {
    checkEndpoint();
} 

checkPayload($data);

$dessert->dessert_title = checkIndex($data, "dessert_title");
$dessert->dessert_price = checkIndex($data, "dessert_price");
$dessert->dessert_description = checkIndex($data, "dessert_description");

$dessert->dessert_is_active = 1;
$dessert->dessert_created = date("Y-m-d H:i:s");
$dessert->dessert_datetime = date("Y-m-d H:i:s");


isNameExist($dessert, $dessert->dessert_title);

$query = checkCreate($dessert);
returnSuccess($dessert, "dessert", $query);