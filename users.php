<?php
session_start();
include_once "php/config.php";
if (!isset($_SESSION['unique_id'])) {
   header("location: login.php");
}
?>

<?php include_once "header.php"; ?>


<body class="main-body">

   <?php
   $sql = mysqli_query($conn, "SELECT * FROM users WHERE unique_id = {$_SESSION['unique_id']}");
   if (mysqli_num_rows($sql) > 0) {
      $row = mysqli_fetch_assoc($sql);
   }
   ?>

   <div class="users-container bg-white">
      <div class="container-fluid  mt-2 pb-4 border  text-dark">
         <div class="row main-row bg-white">

            <!-- ----------------- Users List---------------------------- -->
            <div class="col-md-5 col-sm-5 all-users mb-2">
               <div class="row control">
                  <div class="col-sm-12 ">
                     <ul class="inline control-list pe-2">
                        <li class="logout-v2 pe-2">
                           <a href="php/logout.php?logout_id=<?php echo $row['unique_id']; ?>" class="line-none text-lgray">logout
                           </a>
                        </li>
                     </ul>
                  </div>
               </div>
               <!-- --------------- Main User ------------------ -->
               <div class="row main-user  mb-md-5 mt-md-3">
                  <div class="col-md-2 col-sm-3 col-3 text-center  pe-0 me-0">
                     <div class="user-img inline ">
                        <img src="php/images/<?php echo $row['img']; ?>" class=" rounded-circle">

                        <?php
                        if ($row['status'] == 0)
                           echo '<span class="status offline"></span>';
                        else
                           echo '<span class="status online"></span>';
                        ?>
                        <span class="status"></span>
                     </div>
                  </div>
                  <div class="col-md-6 col-sm-7 col-8  user-info ps-3 ms-0">

                     <div class="row ">
                        <span class="col-sm-12 user-name">
                           <a href="#" class="line-none">
                              <span><?php echo $row['first_name'] . " "
                                       . $row['last_name'] ?></span>
                           </a>
                        </span>
                     </div>
                  </div>
                  <div class="col-md-3 col-1  d-inline-flex align-items-center  ">
                     <span class="logout btn btn-outline-secondary">
                        <a href="php/logout.php?logout_id=<?php echo $row['unique_id']; ?>" class="line-none text-lgray">logout</a>
                     </span>
                  </div>


               </div>

               <!-- --------------------------------------------- -->

               <div class="row search-container pb-4 mt-3">
                  <div class="col-md-12">
                     <div class="search-box input-group">
                        <input type="text" class="form-control search-bar" placeholder="Enter name to search..." value="">
                        <span class="btn search-icon input-group-text">
                           <i class="fas fa-search "></i>
                        </span>
                     </div>

                  </div>
               </div>
               <!--------users list in xs screens only-------------->

               <div class="row users-list-xs hidden">
								<div class="col users-list-xs-inner">
									
								</div>
             	</div>

             	<!---------------------------------------------------->
               <div class="row users-list-container ">
                  <div class="col-md-12 users-list">

                  </div>
               </div>
            </div>
            <!-- -------------------------------------------------------- -->
            <!-- -------------------Chat Side----------------------------- -->
            <div class="col-md-5 col-sm-7 offset-md-1 chat-container-outer  mt-md-4  box-sh">
            	<h3 class="text-lgray text-center mt-5">
	                click on a user to start chat
	                <i class="far fa-comment"></i>
              </h3> 
          	  <div class="chat-container">      		
								           		
          		</div>
               
            </div>
            <!-- --------------------------------------------------------- -->
         </div>


      </div>

   </div>

   <!-- -------------------------Footer------------------------- -->
   <div class="footer text-center ">
      <p class="text-lgray">Designed By Me @<a href="#" class="line-none">Alih</a> 2022</p>
   </div>
   <!-- -------------------------------------------------------- -->





   <!-- ----------------------Scripts------------------------- -->

   <script src="utilites/jquery.js"></script>
   <script src="utilites/bootstrap/js/bootstrap.min.js"></script>
   <!-- <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script> -->
   <!--
   <script src="js/bootstrap.min.js"></script>
	-->
   <script type="text/javascript" src="js/checkStatus.js"></script>

   <script type="text/javascript" src="js/users.js"></script>
   <script type="text/javascript" src="js/responsive_users.js"></script>




</body>

</html>