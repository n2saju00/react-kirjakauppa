<?php
require('./inc/headers.php');
require_once('inc/functions.php');

$db = openSQLite();

if (!isset($_GET["action"])) {
    echo "no action";
    http_response_code(400);
    return;
} else if (!isset($_SESSION["username"])) {
    echo "not logged in";
    http_response_code(400);
    return;
}

$action = $_GET["action"];
    
switch ($action) {
    case "makeOrder":

    break;
}