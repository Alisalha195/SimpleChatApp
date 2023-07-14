<?php 
    session_start();
    if(isset($_SESSION['unique_id'])){

        include_once "config.php";
        
        $incoming_id = mysqli_real_escape_string($conn, $_POST['incoming_id']);
        // --------- just for status -----------------------------
         $sql1 = mysqli_query($conn, "SELECT * FROM users
                      WHERE unique_id = {$incoming_id}");
         $status = '' ;

         if(mysqli_num_rows($sql1) > 0) {
            $row = mysqli_fetch_assoc($sql1);

            if($row['status'] == 0) {
              $status = '<span class="status offline"></span>';
            }    
            else {
              $status = '<span class="status online"></span>';
            }
         }

         // -------------------------------------------------------

        
        $outgoing_id = $_SESSION['unique_id'];
        
        
        $output = "";

        //------join for getting messages that only this user had send----------
        $sql = "SELECT * FROM messages LEFT JOIN users ON users.unique_id = messages.outgoing_msg_id
                WHERE (outgoing_msg_id = {$outgoing_id} AND incoming_msg_id = {$incoming_id})
                OR (outgoing_msg_id = {$incoming_id} AND incoming_msg_id = {$outgoing_id}) ORDER BY msg_id";
        $query = mysqli_query($conn, $sql);
        // echo (mysqli_num_rows($query));
        if(mysqli_num_rows($query) > 0){


            while($row = mysqli_fetch_assoc($query)){
                if($row['outgoing_msg_id'] === $outgoing_id){

                     
                            
                            
                    //----------message--out----------
                    $output .= '<div class="row mt-4 ">
                                    <div class="col-sm-12 text-end">
                                        <div class="msg outgoing p-2">
                                            '. $row['msg'] .'
                                        </div>
                                    </div>
                                </div>';
                }else{

                    // -----------message--in----------
                    $output .= '<div class="row mt-4 ">
                                    <div class="col-2 text-end ">
                                        <div class="user-img me-0 ">
                                            <img src="php/images/' . $row['img'] . '" 
                                                 class=" rounded-circle">'
                                            . $status .
                                        '</div>
                                    </div>
                                    <div class="col-10">
                                        <div class="msg incoming p-2">
                                            '. $row['msg'] .'
                                        </div>
                                    </div>
                                </div>';
                }
            }
        }else{
            $output .= '<div class="text text-lgray pt-2">No messages are available. Once you send message they will appear here.</div>';
        }
        echo $output;
    }else{
        header("location: ../login.php");
    }

?>