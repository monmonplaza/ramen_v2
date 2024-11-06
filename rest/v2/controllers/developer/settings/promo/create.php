<?php
$conn = null;
$conn = checkDbConnection();
$promo = new Promo($conn);

if (array_key_exists("promoid", $_GET)) {
    checkEndpoint();
} 

checkPayload($data);

$promo->promo_title = checkIndex($data, "promo_title");

$promo->promo_is_active = 1;
$promo->promo_created = date("Y-m-d H:i:s");
$promo->promo_datetime = date("Y-m-d H:i:s");


isNameExist($promo, $promo->promo_title);

$query = checkCreate($promo);
returnSuccess($promo, "promo", $query);