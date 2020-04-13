<?php

$dbServerName = "127.0.0.1";
$dbUsername = "lab";
$dbPassword = "Aa123456";
$dbName = "lab";

$conn = new mysqli($dbServerName, $dbUsername, $dbPassword, $dbName);

if (mysqli_connect_errno())
{
    echo "Failed to connect to MySQL: " . mysqli_connect_error();
}