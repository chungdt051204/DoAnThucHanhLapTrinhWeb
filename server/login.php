<?php
    //Cho phép truy cập khác nguồn gốc
    header("Access-Control-Allow-Origin: http://localhost:5173"); 
    //Phải thêm dòng này nếu fetch API phía client có credentials: "include"
    header("Access-Control-Allow-Credentials: true"); 
    //Cho phép các Phương thức (Methods) cần thiết
    header("Access-Control-Allow-Methods: POST, OPTIONS");
    //Cho phép các header, nếu client dùng form data để gửi dữ liệu thì không cần
    header("Access-Control-Allow-Headers: Content-Type"); 

    //Xử lý yêu cầu preflight
    if ($_SERVER["REQUEST_METHOD"] === "OPTIONS"){
        http_response_code(200);
        exit(0); 
    }
    //Nếu client gửi dữ liệu với method POST thì mới thực hiện
    if($_SERVER["REQUEST_METHOD"] === "POST"){
        if(!isset($_SESSION))
            session_start();
        $email = $_POST["email"]??"";
        $password = $_POST["password"]??"";
        if($email === "admin@gmail.com" && $password === "admin123"){
            $_SESSION["user"] = [
                "email" => $email,
                "loginTime" => time(),
            ];
            http_response_code(200);
            echo json_encode(["message" => "Đăng nhập thành công"]);
           
        }
        else{
            http_response_code(401);
            echo json_encode(["message" => "Sai thông tin đăng nhập"]);
        }
    }  
?>