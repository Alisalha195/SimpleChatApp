<?php 
  session_start();
  if(isset($_SESSION['unique_id'])){
    header("location: users.php");
  }
?>

<?php include_once "header.php"; ?>

<body class="main-body">

	<div class="sign-up bg-white">
		<div class="container p-4 my-5 border  text-dark">
			<h3 class=" head-text pb-3">My Chat</h3>
			<form action="#" method="POST" enctype="multipart/form-data" 
			      autocomplete="off">
			      <div class="error-text"></div>
						<div class="name-details mt-3 row">
							<div class="form-group col-sm-6">
								<label for="f-name" class="form-label">
								  first Name
								</label>
								<input id="f-name" type="text" 
								     class="form-control" name="first-name"
								     placeholder="first name">
							</div>
							<div class="form-group col-sm-6">
								<label for="l-name" class="form-label">
								Last Name
								</label>
								<input id="l-name" type="text" 
								     class="form-control" name="last-name"
								     placeholder="last name">
							</div>
						</div>

			      <div class="form-group mt-3">
			      	<label for="email" class="form-label">
						    email
						</label>
						<input id="email" type="email" 
						       class="form-control" name="email"
						       placeholder="email">
			      </div>

			      <div class="form-group mt-3">
			      	<label for="password" class="form-label">
						    password
						</label>
						<input id="password" type="password" 
						       class="form-control" name="password"
						       placeholder="password">
			      </div>
			      <div class="form-group mt-3">
			          <label for="password" class="form-label">
						    select image
						</label>
			          <input id="image" type="file" class="form-control" name="image"
			          		accept="image/x-png,image/gif,image/jpeg,image/jpg" >
			      </div>
				
			      <input type="submit" class=" form-control btn btn-primary mt-4"
			             value="Continue to Chat">
			</form>
			<div class="link mt-3">Already signed up? 
				<a href="login.php">Login now</a>
			</div>

		</div>
	</div>

	

	<!-- ------------------------------------------------------- -->

	<script src="utilites/jquery.js"></script>
	<script src="utilites/bootstrap/js/bootstrap.min.js"></script>
	<!-- <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script> -->
	<!--
    <script src="js/bootstrap.min.js"></script>
	-->

	<script src="js/signup.js"></script>
	<script type="text/javascript" src="js/checkStatus.js"></script>
	

</body>
</html>