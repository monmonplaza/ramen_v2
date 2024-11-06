<?php

require '../../../../core/header.php';
require '../../../../core/functions.php';
require '../../../../models/developer/settings/Promo.php';

$conn = null;
$conn = checkDbConnection();
$promo = new Promo($conn);
$response = new Response();

$body = file_get_contents("php://input");
$data = json_decode($body, true);

$error = [];
$returnData = [];

if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();
    if (array_key_exists("promoid", $_GET)) {

        checkPayload($data);
        $promo->promo_aid = $_GET['promoid'];
        $promo->promo_is_active = trim($data["isActive"]);
        $promo->promo_datetime = date("Y-m-d H:i:s");

        checkId($promo->promo_aid);
        $query = checkActive($promo);
        http_response_code(200);
        returnSuccess($promo, "promo", $query);
    }

    checkEndpoint();
}

http_response_code(200);
checkAccess();