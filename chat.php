


<?php 

  include_once "php/config.php";
  $user_id = mysqli_real_escape_string($conn, $_GET['user_id']);  
  $sql = mysqli_query($conn, "SELECT * FROM users WHERE unique_id = {$user_id}");

  $stausString = '';
  $status = '' ;

       

  $output = "" ;

  if(mysqli_num_rows($sql) > 0){
    $row = mysqli_fetch_assoc($sql);

    if($row['status'] == 0) {
      $status = '<span class="status offline"></span>';
      $stausString = "offline";
    }
       
    else {
      $status = '<span class="status online"></span>';
      $stausString = "online";
    }


    $output = '<div class="row header pb-2">          
                <div class="col-sm-2 col-2   text-end  pe-0">
                  <div class="user-img ">
                    <img src="php/images/' . $row['img'] . '"
                      class=" rounded-circle">' . $status .                  
                  '</div>
                </div >
                <div class="col-md-9 col-sm-7 col-6">
                  <div class="details">
                     <a href="profile.php?uid='.$row['unique_id'].' " class="line-none user-name">' . 
                       $row['first_name']. " " . $row['last_name'] .
                     '</a>
                    <p class="col-sm-12 user-status text-lgray">'
                      . $stausString .
                    '</p>
                  </div>
                </div>
                <div class="col-md-1 col-sm-1 col-1">
                  <span class="close-chat">
                    <i class="fa fa-times"></i>
                  </span>
                </div>
               
              </div>
              <!----------------------->
              <!--------chat box---------->
              <div class="row chat-box">
                <div class="col-sm-12 pb-4 chat-box-inner">


                </div>
              </div>
              <!------------------------->
              <!---------typing area---------->
              <div class="row typing-area">
                <div class="col-sm-10 col-10 offset-1 p-3 typing-outer">
                  <form action="#" class="typing-area-form">
                    <input type="text" class="incoming_id" name="incoming_id" 
                    value="' . $user_id .'" hidden>
                    <div class="typing-box input-group">
                        <input type="text" class="form-control typing-bar " 
                          name="message" autocomplete="off"
                          placeholder="Type Your Message..." 
                          value = "">
                        <span class="btn typing-icon 
                                     input-group-text ms-1 pe-3">
                          <i class="fab fa-telegram-plane "></i>
                        </span>
                    </div>
                  </form>
                </div>
              </div>' ;

          
  }else{
    $output .= 'No user found related to your search term';
  }
  echo $output;

  
    

?>
       
        
      
      <!-- <div class="chat-box">

      </div>
      <form action="#" class="typing-area">
        <input type="text" class="incoming_id" name="incoming_id" value="
        <?php /*echo $user_id;*/ ?>
        " hidden>
      </form> -->
    
  
      
          
  

