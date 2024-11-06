<?php
$conn = null;
$conn = checkDbConnection();
$dessert = new Dessert($conn);
// $error = [];
// $returnData = [];
if (array_key_exists("dessertid", $_GET)) {
    checkPayload($data);

    $dessert->dessert_aid = $_GET['dessertid'];
    $dessert->dessert_title = checkIndex($data, "dessert_title");
    $dessert->dessert_price = checkIndex($data, "dessert_price");
    $dessert->dessert_description = checkIndex($data, "dessert_description");

    $dessert->dessert_datetime = date("Y-m-d H:i:s");
    $dessert_title_old = strtolower($data["dessert_title_old"]);
    // checkId($dessert->dessert_aid);
    compareName($dessert, $dessert_title_old, $dessert->dessert_title);

    $query = checkUpdate($dessert);
    returnSuccess($dessert, "dessert", $query);
}

checkEndpoint();