<?php
$conn = null;
$conn = checkDbConnection();
$toppings = new Toppings($conn);
// $error = [];
// $returnData = [];
if (array_key_exists("toppingsid", $_GET)) {
    $toppings->toppings_aid = $_GET['toppingsid'];
    checkId($toppings->toppings_aid);
    // isAssociated($toppings);
    $query = checkDelete($toppings);
    returnSuccess($toppings, "toppings", $query);
}

checkEndpoint();