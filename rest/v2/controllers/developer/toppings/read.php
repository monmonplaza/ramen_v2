<?php
$conn = null;
$conn = checkDbConnection();
$toppings = new Toppings($conn);
// $error = [];
// $returnData = [];
if (array_key_exists("toppingsid", $_GET)) {
    $toppings->toppings_aid = $_GET['toppingsid'];
    checkId($toppings->toppings_aid);
    $query = checkReadById($toppings);
    http_response_code(200);
    getQueriedData($query);
}

if (empty($_GET)) {
    $query = checkReadAll($toppings);
    http_response_code(200);
    getQueriedData($query);
}

checkEndpoint();