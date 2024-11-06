<?php
$conn = null;
$conn = checkDbConnection();
$promo = new Promo($conn);
// $error = [];
// $returnData = [];
if (array_key_exists("promoid", $_GET)) {
    $promo->promo_aid = $_GET['promoid'];
    checkId($promo->promo_aid);
    $query = checkReadById($promo);
    http_response_code(200);
    getQueriedData($query);
}

if (empty($_GET)) {
    $query = checkReadAll($promo);
    http_response_code(200);
    getQueriedData($query);
}

checkEndpoint();