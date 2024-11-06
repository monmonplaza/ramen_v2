<?php
$conn = null;
$conn = checkDbConnection();
$mop = new Mop($conn);

if (array_key_exists("mopid", $_GET)) {
    checkEndpoint();
} 

checkPayload($data);

$mop->mop_title = checkIndex($data, "mop_title");

$mop->mop_is_active = 1;
$mop->mop_created = date("Y-m-d H:i:s");
$mop->mop_datetime = date("Y-m-d H:i:s");


isNameExist($mop, $mop->mop_title);

$query = checkCreate($mop);
returnSuccess($mop, "mop", $query);