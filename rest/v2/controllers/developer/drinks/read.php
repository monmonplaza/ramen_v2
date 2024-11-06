<?php
$conn = null;
$conn = checkDbConnection();
$drinks = new Drinks($conn);
// $error = [];
// $returnData = [];
if (array_key_exists("drinksid", $_GET)) {
    $drinks->drinks_aid = $_GET['drinksid'];
    checkId($drinks->drinks_aid);
    $query = checkReadById($drinks);
    http_response_code(200);
    getQueriedData($query);
}

if (empty($_GET)) {
    $query = checkReadAll($drinks);
    http_response_code(200);
    getQueriedData($query);
}

checkEndpoint();