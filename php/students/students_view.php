<?php

$path = $_SERVER['DOCUMENT_ROOT'];
include $path . "/php/utils/Utils.php";

include_once $path . "/php/db/db_connector.php";

validateGet();

$surname = $_GET["student"];

$marksResult = mysqli_query($conn, "SELECT * from marks WHERE surname='$surname'");

if (!$marksResult) {
    die("Error loading marks: " . $conn->error);
}

$marks = array();

while ($row = $marksResult->fetch_assoc()) {
    array_push($marks, $row["mark"]);
}

echo json_encode($marks);