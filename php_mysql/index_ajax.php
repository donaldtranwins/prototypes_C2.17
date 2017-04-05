<?php
require('mysql_connect.php');

$form = $_POST;
$title = $form["title"];
$details = $form["details"];
$user_id = $form['user_id'];

$query = "INSERT INTO `todo_items` (title, details, user_id, timestamp) VALUES ('$title', '$details', '$user_id', null)";

mysqli_query($conn, $query);
if(mysqli_affected_rows($conn) > 0){
    $id = mysqli_insert_id($conn);
    $form["id"] = $id;
    $timeSearch = "SELECT timestamp FROM `todo_items` WHERE id=$id";
    $timeResults = mysqli_query($conn, $timeSearch);
    if(mysqli_num_rows($timeResults) > 0) {
        $time = mysqli_fetch_assoc($timeResults);
        $form["time"] = $time;
    }
    print(json_encode($form));
} else {
    print("FAILURE");
}

mysqli_close($conn);
?>