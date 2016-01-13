<?php

$path = "http://ineedaprompt.com/count";
$count = json_decode(file_get_contents($path), true)["count"];
echo number_format($count);

?>
