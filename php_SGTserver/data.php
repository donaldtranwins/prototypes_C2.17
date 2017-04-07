<?php

define('fromData',true);
$action = $_GET['action'];

if(empty($action)){
	exit('no action specified');
}
require('mysql_connect.php');

$output = [
	'success'=> false, //we assume we will fail
	'errors'=>[]
];

switch($action){
    case 'readAll':
        include 'dataApi/read.php';
        break;
    case 'insert':
        include 'dataApi/insert.php';
        break;
    case 'delete':
        include 'dataApi/delete.php';
        break;
    case 'update':
        include 'dataApi/update.php';
        break;
}
//custom added line to not output an errors property if there are no errors and our success is true
if(empty($output['errors']) && $output['success'] === true) {
    unset($output['errors']);
}
//convert the $output variable to json, store the result in $outputJSON
$outputJSON = json_encode($output);
//print $outputJSON
print($outputJSON);
//end

?>