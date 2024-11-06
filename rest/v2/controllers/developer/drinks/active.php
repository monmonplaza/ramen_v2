<?php

require '../../../core/header.php';
require '../../../core/functions.php';
require '../../../models/developer/Drinks.php';

$conn = null;
$conn = checkDbConnection();
$drinks = new Drinks($conn);
$response = new Response();

$body = file_get_contents("php://input");
$data = json_decode($body, true);

$error = [];
$returnData = [];

if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();
    if (array_key_exists("drinksid", $_GET)) {

        checkPayload($data);
        $drinks->drinks_aid = $_GET['drinksid'];
        $drinks->drinks_is_active = trim($data["isActive"]);
        $drinks->drinks_datetime = date("Y-m-d H:i:s");

        checkId($drinks->drinks_aid);
        $query = checkActive($drinks);
        http_response_code(200);
        returnSuccess($drinks, "drinks", $query);
    }

    checkEndpoint();
}

http_response_code(200);
checkAccess();