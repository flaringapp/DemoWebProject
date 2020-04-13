<?php

$path = $_SERVER['DOCUMENT_ROOT'];
include $path . "/php/utils/Utils.php";

include_once $path . "/php/db/db_connector.php";

validatePost();

$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

$data = $_POST;

$surname = $data["student"];
$marks = $data["marks"];

if (!$surname || !$marks) die("Wrong input data!");

$existingStudentResult = mysqli_query($conn, "SELECT COUNT(*) AS 'count' FROM students WHERE surname='$surname' LIMIT 1");

if (!$existingStudentResult) {
    die("Error checking if student exists: " . $conn->error);
}

$countRow = $existingStudentResult->fetch_assoc();

if ($countRow["count"] == 0) {
    if (!mysqli_query($conn, "INSERT INTO students (surname) VALUES ('$surname')")) {
        die("Error updating student: " . $conn->error);
    }
}

if (!mysqli_query($conn, "DELETE FROM marks WHERE surname='$surname'")) {
    die("Error deleting old marks: " . $conn->error);
}

if (empty($marks)) {
    die("Marks array cannot be empty!");
}

$insertMarksQuery = "INSERT INTO marks (surname, mark) VALUES ('$surname', " . $marks[0] . ")";

for ($i = 1; $i < count($marks); $i++) {
    $insertMarksQuery .= ", ('$surname'," . $marks[$i] . ")";
}

if (!mysqli_query($conn, $insertMarksQuery)) {
    die("Error adding new marks: " . $conn->error);
}

$response = array(
    "message" => "Students marks are set successfully!"
);

echo json_encode($response);