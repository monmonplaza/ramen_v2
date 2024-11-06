<?php
// set http header
require '../../../core/header.php';
// use needed functions
require '../../../core/functions.php';
// use needed classes
require '../../../models/developer/Dessert.php';
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$dessert = new Dessert($conn);
$response = new Response();
// validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();

    if (array_key_exists("start", $_GET)) {
        // get data
        $dessert->dessert_start = $_GET['start'];
        $dessert->dessert_total = 10;
        checkLimitId($dessert->dessert_start, $dessert->dessert_total);
        $query = checkReadLimit($dessert);
        $total_result = checkReadAll($dessert);
        http_response_code(200);
        checkReadQuery(
            $query,
            $total_result,
            $dessert->dessert_total,
            $dessert->dessert_start
        );
    }
    checkEndpoint();
}

http_response_code(200);
checkAccess();