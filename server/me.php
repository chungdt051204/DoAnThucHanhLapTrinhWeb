<?php
    header("Access-Control-Allow-Origin: http://localhost:5173");
    header("Access-Control-Allow-Credentials: true"); 
    if(!isset($_SESSION)){
        session_start();
    }
    if(isset($_SESSION["user"])){
        $user = $_SESSION["user"];
        http_response_code(200);
        echo json_encode($user);
    }
    else
        http_response_code(401);
 ?>