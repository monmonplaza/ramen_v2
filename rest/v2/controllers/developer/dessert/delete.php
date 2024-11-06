<?php
$conn = null;
$conn = checkDbConnection();
$dessert = new Dessert($conn);
// $error = [];
// $returnData = [];
if (array_key_exists("dessertid", $_GET)) {
    $dessert->dessert_aid = $_GET['dessertid'];
    checkId($dessert->dessert_aid);
    // isAssociated($dessert);
    $query = checkDelete($dessert);
    returnSuccess($dessert, "dessert", $query);
}

checkEndpoint();