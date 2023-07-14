		// let startMsg = document.createElement("h3");
		// startMsg.classList.add("text-lgray");
		// startMsg.classList.add("text-center");
		// startMsg.classList.add("mt-5");

		// let startMsgIcon = document.createElement("i");
		// startMsgIcon.classList.add("far");
		// startMsgIcon.classList.add("fa-comment");

		// let text = document.createTextNode("click on a user to start chat ");
		// startMsg.appendChild(text);
		// startMsg.appendChild(startMsgIcon);

//------------------ users Section ------------------------
	let searchBox = document.querySelector(".search-box");
	let searchBar = document.querySelector(".search-bar");
	let searchBtn = document.querySelector(".search-icon");


	let usersPage = document.querySelector(".main-body");

	let chatContainerOuter  = document.querySelector(".chat-container-outer");
	let chatContainer  = document.querySelector(".chat-container");
	let startMsg = chatContainerOuter.querySelector("h3");
	let closeChatBtn = null ;

	let usersList = document.querySelector(".users-list");

	let logoutV2 = document.querySelector(".logout-v2");


	let users_container = document.getElementsByClassName("users-container");

	let users_container_width = users_container[0].clientWidth;


	window.onload = () => {

		handleEmptyChat();
		// handleLogoutV2();
	}

	// initSearchBox();

	function handleEmptyChat() {
		chatContainerOuter.classList.add("start");

		
	}
	function handleNewChat() {
		if(chatContainerOuter.classList.contains("start")) {

			chatContainerOuter.classList.remove("start");
			// let startMsg = chatContainer.querySelector("h3");

			if(!startMsg.classList.contains("hidden"))
				startMsg.classList.add("hidden");
		}
		
	}


	//-------------------Msg Button -----------------
		function handleMsgIcon(target) {

			handleNewChat();

		  let url = target.getAttribute("data-url");  //-- chat.php?uid=23423---
			let xhr = new XMLHttpRequest();
			xhr.open("GET", url, true);
			xhr.onload = ()=>{

				if(xhr.readyState === XMLHttpRequest.DONE){
					if(xhr.status === 200){
					  let data = xhr.response;
					    if(!searchBar.classList.contains("active")){
					    	// chatContainerOuter.children.remove();
					    	// chatContainerOuter.removeChild(startMsg);

					    	chatContainer.innerHTML = data;
					    	chatContainer.style.display = "block";
					    	handleChatCloseBtn();
					    }	
					}
				}
			}
			xhr.send();
		}
	//-----------------------------------------------

	//----------------Chat Close Button--------------
	function handleChatCloseBtn() {
		
		// let chatHeader = document.querySelector(".chat-container .header");
  //  		let chatBox = document.querySelector(".chat-container .chat-box-inner");
		// let typingArea = document.querySelector(".chat-container .typing-area");
    	closeChatBtn = chatContainer.querySelector(".close-chat");

    	

    	closeChatBtn.addEventListener('click' , () => {

    		if (!chatContainerOuter.classList.contains("start")) {
    			chatContainerOuter.classList.add("start");
    		}

    		if(startMsg.classList.contains("hidden"))
				startMsg.classList.remove("hidden");

    		// setTimeout( () => {
    			// chatContainer = null;

    			chatContainer.style.display = "none";
    			// showStartMsg();
    		// } ,100 );
    	});

	}

	// function showStartMsg() {  
	// 	// console.log("ff");
	// 		// startMsg.style.display = "block";
	// 	// console.log(chatContainerOuter.children[0].children[0]);

	// 	// if(!chatContainerOuter.children.contains(startMsg))
	// 		// chatContainerOuter.appendChild(startMsg);
		


	// }
	// ----------------------------------------------
	//----------------Chat Box Typing ---------------

	  function handleChatBoxTyping(target) {

		  let typingArea = document.querySelector(".typing-area");
			let typingBox = typingArea.querySelector(".typing-box");
			let typingBar = typingBox.querySelector(".typing-bar");
			let typingIcon = typingBox.querySelector(".typing-icon");

			//----------------------Typing Box ----------------------------

		
		
				typingBar.onkeyup = () => {
					
					let value = typingBar.value;
					
					if(value == "") {
						typingIcon.classList.remove("active");
					} else {
						typingIcon.classList.add("active");
					}
				}

				typingBar.onfocus = () => {
						
					let value = typingBar.value;
					if(value == "") {
						typingIcon.classList.remove("active");
					} else {
						typingIcon.classList.add("active");
					}	
				}
				typingBar.onblur = () => {
					typingIcon.classList.remove("active");

					typingBar.value = "" ;
				}

			//-------------------------------------------------------------

		};
	// ----------------------------------------------


	setInterval(() =>{


	  let xhr = new XMLHttpRequest();
	  xhr.open("GET", "php/users.php", true);
	  xhr.onload = ()=>{
	  	
	    if(xhr.readyState === XMLHttpRequest.DONE){
	        if(xhr.status === 200){
	          let data = xhr.response;
	          
	          if((!searchBar.classList.contains("active-md")) & (!searchBar.classList.contains("active-sm"))){
	          	// console.log("ok");
	            usersList.innerHTML = data;

	            //------------ handle msg icon ------------------
	            let msgIcons = document.querySelectorAll(".msg-icon");

	            msgIcons.forEach(element => {
	            	element.onclick = () => { 
									handleMsgIcon(element);
									loadChat();
									hideStartMsg();
								}
	            });
							
							//-----------------------------------------------
	          }
	        }
	    }
	  }
	  xhr.send();
	  
	

	}, 500);

function hideStartMsg() {	

	if (chatContainerOuter.classList.contains("start")) 
		chatContainerOuter.classList.remove("start");
	console.log("dfddfgdfg");
	if(! startMsg.classList.contains("hidden"))
			startMsg.classList.add("hidden");
}
// --------------------------------------------------------



//------------------ messages Section ------------------------

	function loadChat() {
		

		setTimeout(() => {

				handleChat()
			// }
		} , 500);
		
	}


	function handleChat() {


	    const form = document.querySelector(".typing-area-form");

		const incoming_id = form.querySelector(".incoming_id").value,
		inputField = form.querySelector(".typing-bar"),
		sendBtn = form.querySelector(".typing-icon"),
		chatBox = document.querySelector(".chat-box-inner");

		scrollToBottom();
		

		form.onsubmit = (e)=>{
		    e.preventDefault();
		}

		inputField.focus();
		inputField.onkeyup = ()=>{
		    if(inputField.value != ""){
		        sendBtn.classList.add("active");
		    }else{
		        sendBtn.classList.remove("active");
		    }
		}

		sendBtn.onclick = ()=>{
			scrollToBottom();
		    let xhr = new XMLHttpRequest();
		    xhr.open("POST", "php/insert-chat.php", true);
		    xhr.onload = ()=>{
		      if(xhr.readyState === XMLHttpRequest.DONE){
		          if(xhr.status === 200){
		              inputField.value = "";
		          }
		      }
		    }
		    let formData = new FormData(form);
		    xhr.send(formData);
		}
		chatBox.onmouseenter = ()=>{
		    chatBox.classList.add("active");
		}

		chatBox.onmouseleave = ()=>{
		    chatBox.classList.remove("active");
		}

		setInterval(() =>{
		    let xhr = new XMLHttpRequest();
		    xhr.open("POST", "php/get-chat.php", true);
		    xhr.onload = ()=>{
		      if(xhr.readyState === XMLHttpRequest.DONE){
		          if(xhr.status === 200){
		            let data = xhr.response;
		            chatBox.innerHTML = data;
		          }
		      }
		    }
		    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		    xhr.send("incoming_id="+incoming_id);
		}, 300);




	 
	}

function scrollToBottom(){
			
	setTimeout(() => {

		let chatBoxOuter = document.querySelector(".chat-box");
		// console.log("height is");

		// console.log("eight is" , chatBoxOuter.scrollHeight);
    chatBoxOuter.scrollTop = chatBoxOuter.scrollHeight;

	} , 550);
			
}



// --------------------------------------------------------


