<?php
$conn = null;
$conn = checkDbConnection();
$dessert = new Dessert($conn);
// $error = [];
// $returnData = [];
if (array_key_exists("dessertid", $_GET)) {
    $dessert->dessert_aid = $_GET['dessertid'];
    checkId($dessert->dessert_aid);
    $query = checkReadById($dessert);
    http_response_code(200);
    getQueriedData($query);
}

if (empty($_GET)) {
    $query = checkReadAll($dessert);
    http_response_code(200);
    getQueriedData($query);
}

checkEndpoint();