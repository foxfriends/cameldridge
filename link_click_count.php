<?php

$link = filter_input(INPUT_POST, "l");
$file = file("links.txt");
$list = array();
for($i = 0; $i < count($file); $i += 2) {
    $a = explode(": ", $file[$i]);
    $list[$a[0]] = trim($a[1]);
}

if(array_key_exists($link, $list)) {
    $list[$link]++;
} else {
    $list[$link] = 1;
}

$f = fopen("links.txt", "w");
$keys = array_keys($list);
for($i = 0; $i < count($list); $i++) {
    fwrite($f, $keys[$i] . ": " . $list[$keys[$i]] . "\n");
}
fclose($f);