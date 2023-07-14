

let loginContainer = document.querySelector(".login");

let signupContainer = document.querySelector(".sign-up");

let chatContainerV2 = document.querySelector(".chat-container");

// -----------------------------------------------------------------
let profileContainer = document.querySelector(".profile-container");
let usersContainer = document.querySelector(".users-container");
// -----------------------------------------------------------------

//------------- check if user still loged in-----------

if((loginContainer == null ) && ( signupContainer == null)) {  //--- not in login or signup page -----

	setInterval( () => {

	 	checkUserStatusOnline();

	} , 400 ); 

} else {                   //---  in login or in signup page -----
	setInterval( () => {

	 	checkUserStatusOffline();

	} , 400 );
}


function checkUserStatusOnline() {
	let xhr = new XMLHttpRequest();
	xhr.open("POST", "php/checkStatus.php", true);
	xhr.onload = ()=>{
	    if(xhr.readyState === XMLHttpRequest.DONE){
	        if(xhr.status === 200){

	          let data = xhr.response;
	          
	          if(data == 0) {
	          	finish();
	          }
	          
	        } else {
	        	 
	        }
	    }
	  }
	  xhr.send();
}


function checkUserStatusOffline() {
	let xhr = new XMLHttpRequest();
	xhr.open("POST", "php/checkStatus.php", true);
	xhr.onload = ()=>{
	    if(xhr.readyState === XMLHttpRequest.DONE){
	        if(xhr.status === 200){

	          let data = xhr.response;
	          if(data == 1) {
	          	finish();
	          }
	          
	        } else {
	        	 
	        }
	    }
	  }
	  xhr.send();
}

function finish() {

	location.href = "login.php";

}

// -------------- check for status to change status color ------------------

function checkForColorInProfile() {
	
	let user_id = chatContainerV2.getAttribute("data-userid");
	// console.log(user_id);
	let statusColorItems = document.querySelectorAll("span.status");

	// console.log(statusColorItems);
	let xhr = new XMLHttpRequest();
	xhr.open("GET", "php/checkColorStatus.php?user_id="+user_id+"", true);
	xhr.onload = ()=>{
	    if(xhr.readyState === XMLHttpRequest.DONE){
	        if(xhr.status === 200){

	          let data = xhr.response;
	          // console.log(data);
	          if(data == 0) {

	          	handleOfflineStatusColor(statusColorItems);	
	          } else {
	          	handleOnlineStatusColor(statusColorItems);
	          }
	          
	        } 
	    }
	  }
	  xhr.send();
} 

// -----------------------------------------------------------------
function checkForColorInUsers() {

	let form = document.querySelector(".typing-area-form");

	

	if(form != null) {  //----- just when start the page loading------

		let incoming_id = form.querySelector(".incoming_id").value;
			// console.log(incoming_id);
		let statusColorItems = document.querySelectorAll(".chat-container span.status");

		let xhr = new XMLHttpRequest();
		xhr.open("GET", "php/checkColorStatus.php?user_id="+incoming_id+"", true);
		xhr.onload = ()=>{
		    if(xhr.readyState === XMLHttpRequest.DONE){
		        if(xhr.status === 200){

		          let data = xhr.response;
		          // console.log(data);
		          if(data == 0) {

		          	handleOfflineStatusColor(statusColorItems);	
		          } else {
		          	handleOnlineStatusColor(statusColorItems);
		          }
		          
		        } 
		    }
		  }
		  xhr.send();
	}
	
	
} 
// ------------------------------------------------------------------
function handleOfflineStatusColor(statusColorItems) {
	// console.log("offline function");
	statusColorItems.forEach( (item) => {
		item.classList.add("offline");

		if(item.classList.contains("online"))
			item.classList.remove("online");
	});


}
function handleOnlineStatusColor(statusColorItems) {
	// console.log("online function");
	
	statusColorItems.forEach( (item) => {
		item.classList.add("online");

		if(item.classList.contains("offline"))
			item.classList.remove("offline");
	});
}


//============================================================
setInterval( () => {

	if((loginContainer == null ) && ( signupContainer == null)) {

		if( usersContainer == null)
		checkForColorInProfile();

		else if ( profileContainer == null)
			checkForColorInUsers();

		 }

} , 500);