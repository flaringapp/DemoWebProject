<?php

$path = $_SERVER['DOCUMENT_ROOT'];
include $path."/php/utils/Utils.php";

header('Content-type: application/json');

$response = array(
    'message' => 'Thanks!'
);

echo json_encode($response);