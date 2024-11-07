<?php

require '../../../core/header.php';
require '../../../core/functions.php';
require '../../../models/developer/Sidesdessert.php';

$conn = null;
$conn = checkDbConnection();
$sidesdessert = new Sidesdessert($conn);
$response = new Response();

$body = file_get_contents("php://input");
$data = json_decode($body, true);

$error = [];
$returnData = [];

if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();
    if (array_key_exists("sidesdessertid", $_GET)) {

        checkPayload($data);
        $sidesdessert->sidesdessert_aid = $_GET['sidesdessertid'];
        $sidesdessert->sidesdessert_is_active = trim($data["isActive"]);
        $sidesdessert->sidesdessert_datetime = date("Y-m-d H:i:s");

        checkId($sidesdessert->sidesdessert_aid);
        $query = checkActive($sidesdessert);
        http_response_code(200);
        returnSuccess($sidesdessert, "sidesdessert", $query);
    }

    checkEndpoint();
}

http_response_code(200);
checkAccess();