
<?php
    session_start();
    include_once "config.php";

    $output = "";

    if(isset($_SESSION['unique_id'])) {

    	$outgoing_id = $_SESSION['unique_id'];
    	$sql = "SELECT * FROM users WHERE  unique_id = {$outgoing_id} ";
	    $result = mysqli_query($conn, $sql);
	    if((mysqli_num_rows($result) > 0)){

	    	while($row = mysqli_fetch_assoc($result)) {
	    		$output = $row["status"];
	    		
	    	}
        
	    }
    } else {
    	$output = 0;
    }
    
    echo $output;

    
?>
 
