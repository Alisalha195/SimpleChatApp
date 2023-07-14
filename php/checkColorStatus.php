
<?php
    session_start();
    include_once "config.php";

    $output = "";

    if(isset($_SESSION['unique_id'])) {

    	$user_id = $_GET['user_id'];

    	$sql = "SELECT * FROM users WHERE  unique_id = {$user_id} ";
	    $query = mysqli_query($conn, $sql);
	    if((mysqli_num_rows($query) > 0)){

	    	while($row = mysqli_fetch_assoc($query)) {
	    		$output = $row["status"];
	    		
	    	}
        
	    }
    } else {
    	// $output = 0;
    }
    
    echo $output;

    
?>
 
