<?php
$conn = null;
$conn = checkDbConnection();
$sidesdessert = new Sidesdessert($conn);
// $error = [];
// $returnData = [];
if (array_key_exists("sidesdessertid", $_GET)) {
    $sidesdessert->sidesdessert_aid = $_GET['sidesdessertid'];
    checkId($sidesdessert->sidesdessert_aid);
    $query = checkReadById($sidesdessert);
    http_response_code(200);
    getQueriedData($query);
}

if (empty($_GET)) {
    $query = checkReadAll($sidesdessert);
    http_response_code(200);
    getQueriedData($query);
}

checkEndpoint();