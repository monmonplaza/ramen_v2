<?php
$conn = null;
$conn = checkDbConnection();
$toppings = new Toppings($conn);
// $error = [];
// $returnData = [];
if (array_key_exists("toppingsid", $_GET)) {
    checkPayload($data);

    $toppings->toppings_aid = $_GET['toppingsid'];
    $toppings->toppings_title = checkIndex($data, "toppings_title");
    $toppings->toppings_price = checkIndex($data, "toppings_price");
    $toppings->toppings_description = checkIndex($data, "toppings_description");

    $toppings->toppings_datetime = date("Y-m-d H:i:s");
    $toppings_title_old = strtolower($data["toppings_title_old"]);
    // checkId($toppings->toppings_aid);
    compareName($toppings, $toppings_title_old, $toppings->toppings_title);

    $query = checkUpdate($toppings);
    returnSuccess($toppings, "toppings", $query);
}

checkEndpoint();