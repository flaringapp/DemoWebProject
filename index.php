<?php

$path = $_SERVER['DOCUMENT_ROOT'];
include $path."/php/utils/Utils.php";

header('Content-type: application/json');

validateGet();

$data = $_GET;

echo json_encode($data);