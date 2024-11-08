<?php
$conn = null;
$conn = checkDbConnection();
$ramen = new Ramen($conn);
// $error = [];
// $returnData = [];
if (array_key_exists("ramenid", $_GET)) {
    checkPayload($data);

    $ramen->ramen_aid = $_GET['ramenid'];
    $ramen->ramen_title = checkIndex($data, "ramen_title");
    $ramen->ramen_price = checkIndex($data, "ramen_price");
    $ramen->ramen_description = checkIndex($data, "ramen_description");
    $ramen->ramen_category = checkIndex($data, "ramen_category");
    $ramen->ramen_photo = checkIndex($data, "ramen_photo");

    $ramen->ramen_datetime = date("Y-m-d H:i:s");
    $ramen_title_old = strtolower($data["ramen_title_old"]);
    // checkId($ramen->ramen_aid);
    compareName($ramen, $ramen_title_old, $ramen->ramen_title);

    $query = checkUpdate($ramen);
    returnSuccess($ramen, "ramen", $query);
}

checkEndpoint();