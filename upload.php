<?php
//var_dump($_FILES);
$naman = move_uploaded_file($_FILES['fileToUpload']['tmp_name'],'upload/'.$_FILES['fileToUpload']["name"]);

echo 'upload/'.$_FILES['fileToUpload']["name"];

//echo 'tere mera rista hai purana';
?>