<?php
// set http header
require '../../../core/header.php';
// use needed functions
require '../../../core/functions.php';
// use needed classes
require '../../../models/developer/Sidesdessert.php';
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$sidesdessert = new Sidesdessert($conn);
$response = new Response();
// validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();

    if (array_key_exists("start", $_GET)) {
        // get data
        $sidesdessert->sidesdessert_start = $_GET['start'];
        $sidesdessert->sidesdessert_total = 10;
        checkLimitId($sidesdessert->sidesdessert_start, $sidesdessert->sidesdessert_total);
        $query = checkReadLimit($sidesdessert);
        $total_result = checkReadAll($sidesdessert);
        http_response_code(200);
        checkReadQuery(
            $query,
            $total_result,
            $sidesdessert->sidesdessert_total,
            $sidesdessert->sidesdessert_start
        );
    }
    checkEndpoint();
}

http_response_code(200);
checkAccess();