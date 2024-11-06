<?php
$conn = null;
$conn = checkDbConnection();
$ramen = new Ramen($conn);
// $error = [];
// $returnData = [];
if (array_key_exists("ramenid", $_GET)) {
    $ramen->ramen_aid = $_GET['ramenid'];
    checkId($ramen->ramen_aid);
    // isAssociated($ramen);
    $query = checkDelete($ramen);
    returnSuccess($ramen, "ramen", $query);
}

checkEndpoint();