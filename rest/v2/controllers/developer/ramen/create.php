<?php
$conn = null;
$conn = checkDbConnection();
$ramen = new Ramen($conn);

if (array_key_exists("ramenid", $_GET)) {
    checkEndpoint();
} 

checkPayload($data);

$ramen->ramen_title = checkIndex($data, "ramen_title");
$ramen->ramen_price = checkIndex($data, "ramen_price");
$ramen->ramen_description = checkIndex($data, "ramen_description");
$ramen->ramen_category = checkIndex($data, "ramen_category");
$ramen->ramen_photo = checkIndex($data, "ramen_photo");

$ramen->ramen_is_active = 1;
$ramen->ramen_created = date("Y-m-d H:i:s");
$ramen->ramen_datetime = date("Y-m-d H:i:s");


isNameExist($ramen, $ramen->ramen_title);

$query = checkCreate($ramen);
returnSuccess($ramen, "ramen", $query);