<?php
$conn = null;
$conn = checkDbConnection();
$sidesdessert = new Sidesdessert($conn);
// $error = [];
// $returnData = [];
if (array_key_exists("sidesdessertid", $_GET)) {
    $sidesdessert->sidesdessert_aid = $_GET['sidesdessertid'];
    checkId($sidesdessert->sidesdessert_aid);
    // isAssociated($sidesdessert);
    $query = checkDelete($sidesdessert);
    returnSuccess($sidesdessert, "sidesdessert", $query);
}

checkEndpoint();