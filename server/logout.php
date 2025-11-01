<?php
    header("Access-Control-Allow-Origin: http://localhost:5173"); 
    header("Access-Control-Allow-Methods: DELETE, OPTIONS");
    header("Access-Control-Allow-Credentials: true");  
    if ($_SERVER["REQUEST_METHOD"] === "OPTIONS"){
        http_response_code(200);
        exit(0); 
    }
    if ($_SERVER["REQUEST_METHOD"] === "DELETE"){
        if(!isset($_SESSION)) 
            session_start();
        session_destroy();
        http_response_code(200);
        echo json_encode(["message" => "Đăng xuất thành công" ]);
    }
 ?>