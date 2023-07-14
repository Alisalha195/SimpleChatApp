

<?php include_once "header.php"; ?>

<?php
    session_start();
	if(isset($_SESSION['unique_id'])){
		include_once "php/config.php";
		$user_id = mysqli_real_escape_string($conn, $_GET['uid']); //--- id of the visited profile user

		if(isset($_SESSION['unique_id'])){

			$sql = mysqli_query($conn, "SELECT * FROM users WHERE unique_id = {$user_id} ");

			if(mysqli_num_rows($sql) > 0){
		        $row = mysqli_fetch_assoc($sql);
		    }
		    
		    $first_name = $row['first_name'];
		    $last_name = $row['last_name'];
		    $email = $row['email'];
		    $img = $row['img'];
		    $status = $row['status'];


		}else{
		    header("location: /index.php");
		}
	}else{  
	header("location: /login.php");
	}


 ?>
<body class="main-body">


	<div class="profile-container bg-white" >
		<span class="arrow">
			<i class="fa fa-arrow-left"></i>
		</span>
		<div class="container-fluid  mt-2 pb-4 border  text-dark">

			<div class="row ">

				<!------------------- Header & Basic Info----------------- -->
				<div class="col-md-5 col-sm-5 col-12 page-header">
					<div class="row  mt-4"> 

						<div class="col-md-12  text-center ">
							<div class="user-img ">
								<img src="php/images/<?php echo $img ?>" class=" rounded-circle">
								<?php
								    if($status == 0)
								    	echo '<span class="status offline"></span>';
								    else
								    	echo '<span class="status online"></span>';
							    ?>
								
							</div>
						</div>
						

					</div>
					<div class="row mb-4">
						<div class="col-md-12 text-center user-info  ">
							<span class=" user-name  text-gray ">
						   	    <?php echo $first_name . " " .$last_name  ?>
						    </span>	

						</div>
					</div>
					<div class="row email mb-2">
						<div class="col-12 text-center">
							<span class="content text-lgray 
										 border-s ps-2 pe-2">
								<i class="fa fa-envelope"></i>
								<span>email :</span>  
								<span><?php echo $email ?></span>  
						    </span>
						</div>
						
					</div>
					
				</div>
				<!----------------------------------------------------------- -->
				 
				<!-- -------------------Chat Side----------------------------- -->
				<div class="col-md-5 col-sm-7 col-12 offset-md-1 chat-container  mt-4 box-sh" 
				      data-url ="chat.php?user_id=<?php echo $user_id ?>"
				      data-userid="<?php echo $user_id ?>">
					
				</div>
				<!-- --------------------------------------------------------- -->
				
			</div>
			
		</div>

	</div>

	<!--==========================Footer===========================-->
	<div class="footer text-center ">
		<p class="text-lgray">Designed By Me @<a href="#" class="line-none">Alih</a> 2022</p>
	</div>
	<!--===========================================================-->

	

	

	<!-- ----------------------Scripts------------------------- -->

	<script src="utilites/jquery.js"></script>
	<script src="utilites/bootstrap/js/bootstrap.min.js"></script>
	<!-- <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script> -->
	<!--
    <script src="js/bootstrap.min.js"></script>
	-->
	<script type="text/javascript" src="js/profile.js"></script>
	<script type="text/javascript" src="js/responsive_profile.js"></script>
	<script type="text/javascript" src="js/checkStatus.js"></script>

</body>
</html>