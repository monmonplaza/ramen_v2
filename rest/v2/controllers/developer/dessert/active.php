<?php

require '../../../core/header.php';
require '../../../core/functions.php';
require '../../../models/developer/Dessert.php';

$conn = null;
$conn = checkDbConnection();
$dessert = new Dessert($conn);
$response = new Response();

$body = file_get_contents("php://input");
$data = json_decode($body, true);

$error = [];
$returnData = [];

if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();
    if (array_key_exists("dessertid", $_GET)) {

        checkPayload($data);
        $dessert->dessert_aid = $_GET['dessertid'];
        $dessert->dessert_is_active = trim($data["isActive"]);
        $dessert->dessert_datetime = date("Y-m-d H:i:s");

        checkId($dessert->dessert_aid);
        $query = checkActive($dessert);
        http_response_code(200);
        returnSuccess($dessert, "dessert", $query);
    }

    checkEndpoint();
}

http_response_code(200);
checkAccess();