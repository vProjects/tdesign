<?php
var_dump($_FILES);
$naman = move_uploaded_file($_FILES['file']['tmp_name'],'upload/'.$_FILES['file']["name"]);

echo $naman;

echo 'tere mera rista hai purana';
?>