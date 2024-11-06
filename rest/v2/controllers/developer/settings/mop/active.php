<?php

require '../../../../core/header.php';
require '../../../../core/functions.php';
require '../../../../models/developer/settings/Mop.php';

$conn = null;
$conn = checkDbConnection();
$mop = new Mop($conn);
$response = new Response();

$body = file_get_contents("php://input");
$data = json_decode($body, true);

$error = [];
$returnData = [];

if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();
    if (array_key_exists("mopid", $_GET)) {

        checkPayload($data);
        $mop->mop_aid = $_GET['mopid'];
        $mop->mop_is_active = trim($data["isActive"]);
        $mop->mop_datetime = date("Y-m-d H:i:s");

        checkId($mop->mop_aid);
        $query = checkActive($mop);
        http_response_code(200);
        returnSuccess($mop, "mop", $query);
    }

    checkEndpoint();
}

http_response_code(200);
checkAccess();