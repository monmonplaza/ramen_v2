<?php
$conn = null;
$conn = checkDbConnection();
$mop = new Mop($conn);
// $error = [];
// $returnData = [];
if (array_key_exists("mopid", $_GET)) {
    $mop->mop_aid = $_GET['mopid'];
    checkId($mop->mop_aid);
    // isAssociated($mop);
    $query = checkDelete($mop);
    returnSuccess($mop, "mop", $query);
}

checkEndpoint();