<?php
  if($_SERVER["SERVER_NAME"] == "localhost"){
    $localhost = true;
    echo file_get_contents("contact.json");
  }else{
    echo false;
  }
?>
