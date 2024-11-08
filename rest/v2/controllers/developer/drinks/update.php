<?php
$conn = null;
$conn = checkDbConnection();
$drinks = new Drinks($conn);
// $error = [];
// $returnData = [];
if (array_key_exists("drinksid", $_GET)) {
    checkPayload($data);

    $drinks->drinks_aid = $_GET['drinksid'];
    $drinks->drinks_title = checkIndex($data, "drinks_title");
    $drinks->drinks_price = checkIndex($data, "drinks_price");
    $drinks->drinks_description = checkIndex($data, "drinks_description");
    $drinks->drinks_category = checkIndex($data, "drinks_category");

    $drinks->drinks_datetime = date("Y-m-d H:i:s");
    $drinks_title_old = strtolower($data["drinks_title_old"]);
    // checkId($drinks->drinks_aid);
    compareName($drinks, $drinks_title_old, $drinks->drinks_title);

    $query = checkUpdate($drinks);
    returnSuccess($drinks, "drinks", $query);
}

checkEndpoint();