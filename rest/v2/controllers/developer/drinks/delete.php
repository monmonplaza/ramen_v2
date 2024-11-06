<?php
$conn = null;
$conn = checkDbConnection();
$drinks = new Drinks($conn);
// $error = [];
// $returnData = [];
if (array_key_exists("drinksid", $_GET)) {
    $drinks->drinks_aid = $_GET['drinksid'];
    checkId($drinks->drinks_aid);
    // isAssociated($drinks);
    $query = checkDelete($drinks);
    returnSuccess($drinks, "drinks", $query);
}

checkEndpoint();