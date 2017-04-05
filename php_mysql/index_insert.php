<!-- index_insert.php -->
<?php
require('mysql_connect.php');

$query = "INSERT INTO `todo_items` SET `id`=null, `title`='nigiri', `details`='gimme dat eel sauce', `timestamp`=null, `user_id`=2";
print("<pre>printing query result");
$result = mysqli_query($conn, $query);
if(mysqli_affected_rows($conn) > 0){
    $new_id = mysqli_insert_id($conn);
    $output['success'] = true;
    $output['new id'] = $new_id;

    print_r($output);
}

mysqli_close($conn);
?>