<?php
$conn = null;
$conn = checkDbConnection();
$promo = new Promo($conn);
// $error = [];
// $returnData = [];
if (array_key_exists("promoid", $_GET)) {
    $promo->promo_aid = $_GET['promoid'];
    checkId($promo->promo_aid);
    // isAssociated($promo);
    $query = checkDelete($promo);
    returnSuccess($promo, "promo", $query);
}

checkEndpoint();