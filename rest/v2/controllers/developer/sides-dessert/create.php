<?php
$conn = null;
$conn = checkDbConnection();
$sidesdessert = new Sidesdessert($conn);

if (array_key_exists("sidesdessertid", $_GET)) {
    checkEndpoint();
} 

checkPayload($data);

$sidesdessert->sidesdessert_title = checkIndex($data, "sidesdessert_title");
$sidesdessert->sidesdessert_price = checkIndex($data, "sidesdessert_price");
$sidesdessert->sidesdessert_description = checkIndex($data, "sidesdessert_description");

$sidesdessert->sidesdessert_is_active = 1;
$sidesdessert->sidesdessert_created = date("Y-m-d H:i:s");
$sidesdessert->sidesdessert_datetime = date("Y-m-d H:i:s");


isNameExist($sidesdessert, $sidesdessert->sidesdessert_title);

$query = checkCreate($sidesdessert);
returnSuccess($sidesdessert, "sidesdessert", $query);