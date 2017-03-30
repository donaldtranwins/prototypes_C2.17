<?php



if (!empty($_GET)){
    print(json_encode($_GET));
}
if (!empty($_POST)) {
//    var_dump(json_encode($_POST));
    print(json_encode($_POST));
}

?>