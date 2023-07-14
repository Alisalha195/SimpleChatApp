<?php
    while($row = mysqli_fetch_assoc($query)){

        $user_id_1 = $row['unique_id'];
        $sql2 = "SELECT * FROM messages WHERE (incoming_msg_id = {$row['unique_id']}
                OR outgoing_msg_id = {$row['unique_id']}) AND (outgoing_msg_id = {$outgoing_id} 
                OR incoming_msg_id = {$outgoing_id}) ORDER BY msg_id DESC LIMIT 1";
        $query2 = mysqli_query($conn, $sql2);
        $row2 = mysqli_fetch_assoc($query2);
        (mysqli_num_rows($query2) > 0) ? $result = $row2['msg'] : $result ="No messages";
        (strlen($result) > 28) ? $msg =  substr($result, 0, 28) . '...' : $msg = $result;
        if(isset($row2['outgoing_msg_id'])){
            ($outgoing_id == $row2['outgoing_msg_id']) ? $you = "You: " : $you = "";
        }else{
            $you = "";
        }

        $status = '' ;
        if($row['status'] == 0)
             $status = '<span class="status offline"></span>';
        else
             $status = '<span class="status online"></span>';

        ($row['status'] == 0) ? $offline = "offline" : $offline = "";
        ($outgoing_id == $row['unique_id']) ? $hid_me = "hide" : $hid_me = "";

        $output .=  ' <div class="xs-user me-2 ms-2 ">
                        <div class="xs-user-img">
                            <img src="php/images/'. $row['img'] .'" class=" rounded-circle">'
                            . $status .
                        '</div>
                        <div class="xs-control">
                            <span class="usr-icon inline">
                                <a href="profile.php?uid='.$row['unique_id'].' " class="line-none">
                                    <i class="fa fa-user"></i>        
                                </a>     
                            </span>
                            <span class="msg-icon inline" data-url = "chat.php?user_id='
                                              . $row['unique_id'] .'">
                    
                                <i class="far fa-comment"></i>                

                            </span>
                        </div>
                    </div>

                     ' ;   
                                    
 
                    
    }
?>

