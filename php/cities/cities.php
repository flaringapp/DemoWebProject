<?php

$path = $_SERVER['DOCUMENT_ROOT'];
include $path . "/php/utils/Utils.php";

include_once $path . "/php/db/db_connector.php";

validatePost();

$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

$data = $_POST;

$citiesData = $data["cities"];
$sort = $data["sort"] ?: false;

$cities = array();

for ($i = 0; $i < count($citiesData); $i++) {
    $city = $citiesData[$i];
    $description = getDBCityDescription($conn, $city);
    if ($description) {
        $cities[$city] = $description;
    } else {
        $cities[$city] = "No description";
    }
}

if ($sort) {
    ksort($cities);
}

$response = array();

foreach ($cities as $city => $description) {
    $obj = array();
    $obj["name"] = $city;
    $obj["description"] = $description;
    $response[$city] = $obj;
}

$response = array_values($response);

echo json_encode($response);

function getDBCityDescription($conn, $city)
{
    $result = mysqli_query($conn, "SELECT description FROM cities WHERE name=\"$city\"");
    if ($result->field_count === 0) return false;
    return $result->fetch_assoc()["description"];
}
