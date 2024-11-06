<?php
$conn = null;
$conn = checkDbConnection();
$mop = new Mop($conn);
// $error = [];
// $returnData = [];
if (array_key_exists("mopid", $_GET)) {
    checkPayload($data);

    $mop->mop_aid = $_GET['mopid'];
    $mop->mop_title = checkIndex($data, "mop_title");

    $mop->mop_datetime = date("Y-m-d H:i:s");
    $mop_title_old = strtolower($data["mop_title_old"]);
    // checkId($mop->mop_aid);
    compareName($mop, $mop_title_old, $mop->mop_title);

    $query = checkUpdate($mop);
    returnSuccess($mop, "mop", $query);
}

checkEndpoint();