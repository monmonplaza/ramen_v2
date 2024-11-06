<?php
// set http header
require '../../../core/header.php';
// use needed functions
require '../../../core/functions.php';
// use needed classes
require '../../../models/developer/Drinks.php';
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$drinks = new Drinks($conn);
$response = new Response();
// validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();

    if (array_key_exists("start", $_GET)) {
        // get data
        $drinks->drinks_start = $_GET['start'];
        $drinks->drinks_total = 10;
        checkLimitId($drinks->drinks_start, $drinks->drinks_total);
        $query = checkReadLimit($drinks);
        $total_result = checkReadAll($drinks);
        http_response_code(200);
        checkReadQuery(
            $query,
            $total_result,
            $drinks->drinks_total,
            $drinks->drinks_start
        );
    }
    checkEndpoint();
}

http_response_code(200);
checkAccess();