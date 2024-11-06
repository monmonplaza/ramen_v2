<?php
$conn = null;
$conn = checkDbConnection();
$ramen = new Ramen($conn);
// $error = [];
// $returnData = [];
if (array_key_exists("ramenid", $_GET)) {
    $ramen->ramen_aid = $_GET['ramenid'];
    checkId($ramen->ramen_aid);
    $query = checkReadById($ramen);
    http_response_code(200);
    getQueriedData($query);
}

if (empty($_GET)) {
    $query = checkReadAll($ramen);
    http_response_code(200);
    getQueriedData($query);
}

checkEndpoint();