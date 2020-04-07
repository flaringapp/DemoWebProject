<?php

$path = $_SERVER['DOCUMENT_ROOT'];
include $path."/php/utils/Utils.php";

header('Content-type: application/json');

$citiesArray = array(
    'lviv' => 'Description Lviv',
    'kyiv' => 'Description Kyiv',
    'odessa' => 'Description Odessa',
    'zapo' => 'Description Zapo',
);

validatePost();

$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

$data = $_POST;

$citiesData = $data["cities"];
$sort = $data["sort"] ?: false;

$response = array();

for ($i = 0; $i < count($citiesData); $i++) {
    $city = $citiesData[$i];
    if (array_key_exists(strtolower($city), $citiesArray)) {
        $response[$city] = $citiesArray[strtolower($city)];
    } else {
        $response[$city] = "No description";
    }
}

if ($sort) {
    ksort($response);
}

echo json_encode($response);