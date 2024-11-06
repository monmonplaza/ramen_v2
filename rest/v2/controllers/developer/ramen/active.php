<?php

require '../../../core/header.php';
require '../../../core/functions.php';
require '../../../models/developer/Ramen.php';

$conn = null;
$conn = checkDbConnection();
$ramen = new Ramen($conn);
$response = new Response();

$body = file_get_contents("php://input");
$data = json_decode($body, true);

$error = [];
$returnData = [];

if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();
    if (array_key_exists("ramenid", $_GET)) {

        checkPayload($data);
        $ramen->ramen_aid = $_GET['ramenid'];
        $ramen->ramen_is_active = trim($data["isActive"]);
        $ramen->ramen_datetime = date("Y-m-d H:i:s");

        checkId($ramen->ramen_aid);
        $query = checkActive($ramen);
        http_response_code(200);
        returnSuccess($ramen, "ramen", $query);
    }

    checkEndpoint();
}

http_response_code(200);
checkAccess();