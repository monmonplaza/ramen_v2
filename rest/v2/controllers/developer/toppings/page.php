<?php
// set http header
require '../../../core/header.php';
// use needed functions
require '../../../core/functions.php';
// use needed classes
require '../../../models/developer/Toppings.php';
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$toppings = new Toppings($conn);
$response = new Response();
// validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();

    if (array_key_exists("start", $_GET)) {
        // get data
        $toppings->toppings_start = $_GET['start'];
        $toppings->toppings_total = 15;
        checkLimitId($toppings->toppings_start, $toppings->toppings_total);
        $query = checkReadLimit($toppings);
        $total_result = checkReadAll($toppings);
        http_response_code(200);
        checkReadQuery(
            $query,
            $total_result,
            $toppings->toppings_total,
            $toppings->toppings_start
        );
    }
    checkEndpoint();
}

http_response_code(200);
checkAccess();