<?php
require('mysql_connect.php');

$title = $_POST["title"];
$details = $_POST["details"];
$user_id = $_POST['user_id'];

$query = "INSERT INTO `todo_items` (title, details, user_id) VALUES ('$title', '$details', '$user_id')";
//$query = "INSERT INTO `todo_items` (`title`, `details`, `user_id`) VALUES ('$title', '$details', '$user_id')";
//$query = "INSERT INTO `todo_items` SET title='$title', details='$details', user_id='$user_id'";
//$query = "INSERT INTO `todo_items` SET `title`='$title', `details`='$details', `user_id`='$user_id'";
//$query = 'INSERT INTO `todo_items` SET title="$title", details="$details", user_id="$user_id"'; // DONT DO, it literally sends '$title' instead of 'foodie'

print("<pre>printing query result...\n");
mysqli_query($conn, $query);
if(mysqli_affected_rows($conn) > 0){
    print("SUCCESS \n");
    $new_id = mysqli_insert_id($conn);
    $output['success'] = true;
    $output['new id'] = $new_id;

    print_r($output);
} else {
    print("FAILURE");
}

mysqli_close($conn);
?>