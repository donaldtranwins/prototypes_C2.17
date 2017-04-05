<!-- index_select.php -->
<?php
require('mysql_connect.php');

$query = "
SELECT `title`, `details` FROM `todo_items` 
WHERE `title` LIKE '%yaki' OR `title` LIKE '%toro'
";
print("printing query result <pre>");
$result = mysqli_query($conn, $query);
if(mysqli_num_rows($result) > 0){
    while($row = mysqli_fetch_assoc($result)){
        $output[] = $row;
//        print_r($row);
    }
    print_r($output);
}
mysqli_close($conn);
?>