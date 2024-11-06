<?php
$conn = null;
$conn = checkDbConnection();
$mop = new Mop($conn);
// $error = [];
// $returnData = [];
if (array_key_exists("mopid", $_GET)) {
    $mop->mop_aid = $_GET['mopid'];
    checkId($mop->mop_aid);
    $query = checkReadById($mop);
    http_response_code(200);
    getQueriedData($query);
}

if (empty($_GET)) {
    $query = checkReadAll($mop);
    http_response_code(200);
    getQueriedData($query);
}

checkEndpoint();