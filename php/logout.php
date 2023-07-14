

<?php

    session_start();
    // include "checkStatus.php";
    if(isset($_SESSION['unique_id'])){

        
        include_once "config.php";
        $logout_id = mysqli_real_escape_string($conn, $_GET['logout_id']);
        if(isset($logout_id)){
            $status = 0;
            // $sql = mysqli_query($conn, "UPDATE users SET status = '{$status}' WHERE unique_id = {$_GET['logout_id']}");
            $sql = mysqli_query($conn, "UPDATE users SET status = '{$status}' WHERE unique_id = $logout_id ");

            if($sql){
                session_unset();
                session_destroy();
                header("location: ../login.php");
            }
        }else{
            header("location: ../users.php");
        }
    }else{  
        header("location: ../login.php");
    }
?>