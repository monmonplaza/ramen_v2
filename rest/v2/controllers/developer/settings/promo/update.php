<?php
$conn = null;
$conn = checkDbConnection();
$promo = new Promo($conn);
// $error = [];
// $returnData = [];
if (array_key_exists("promoid", $_GET)) {
    checkPayload($data);

    $promo->promo_aid = $_GET['promoid'];
    $promo->promo_title = checkIndex($data, "promo_title");

    $promo->promo_datetime = date("Y-m-d H:i:s");
    $promo_title_old = strtolower($data["promo_title_old"]);
    // checkId($promo->promo_aid);
    compareName($promo, $promo_title_old, $promo->promo_title);

    $query = checkUpdate($promo);
    returnSuccess($promo, "promo", $query);
}

checkEndpoint();