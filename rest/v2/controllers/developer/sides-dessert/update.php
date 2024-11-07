<?php
$conn = null;
$conn = checkDbConnection();
$sidesdessert = new Sidesdessert($conn);
// $error = [];
// $returnData = [];
if (array_key_exists("sidesdessertid", $_GET)) {
    checkPayload($data);

    $sidesdessert->sidesdessert_aid = $_GET['sidesdessertid'];
    $sidesdessert->sidesdessert_title = checkIndex($data, "sidesdessert_title");
    $sidesdessert->sidesdessert_price = checkIndex($data, "sidesdessert_price");
    $sidesdessert->sidesdessert_description = checkIndex($data, "sidesdessert_description");

    $sidesdessert->sidesdessert_datetime = date("Y-m-d H:i:s");
    $sidesdessert_title_old = strtolower($data["sidesdessert_title_old"]);
    // checkId($sidesdessert->sidesdessert_aid);
    compareName($sidesdessert, $sidesdessert_title_old, $sidesdessert->sidesdessert_title);

    $query = checkUpdate($sidesdessert);
    returnSuccess($sidesdessert, "sidesdessert", $query);
}

checkEndpoint();