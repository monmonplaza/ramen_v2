<?php

require '../../../core/header.php';
require '../../../core/functions.php';
require '../../../models/developer/Toppings.php';

$conn = null;
$conn = checkDbConnection();
$toppings = new Toppings($conn);
$response = new Response();

$body = file_get_contents("php://input");
$data = json_decode($body, true);

$error = [];
$returnData = [];

if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();
    if (array_key_exists("toppingsid", $_GET)) {

        checkPayload($data);
        $toppings->toppings_aid = $_GET['toppingsid'];
        $toppings->toppings_is_active = trim($data["isActive"]);
        $toppings->toppings_datetime = date("Y-m-d H:i:s");

        checkId($toppings->toppings_aid);
        $query = checkActive($toppings);
        http_response_code(200);
        returnSuccess($toppings, "toppings", $query);
    }

    checkEndpoint();
}

http_response_code(200);
checkAccess();