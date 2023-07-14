

let usersPage = document.querySelector(".main-body");
let chatContainer  = document.querySelector(".chat-container");
let backArrow = document.querySelector(".arrow");
let closeChatBtn = null ;


window.onload = () => {
	retreiveChat();
	scrollToBottom();
}

backArrow.addEventListener('click' , () => {
 
	location.href = "login.php";
});

function retreiveChat() {

	let url = chatContainer.getAttribute("data-url");  //--chat.php>uid=945----
	let xhr = new XMLHttpRequest();
	xhr.open("GET", url, true);
	xhr.onload = ()=>{

		if(xhr.readyState === XMLHttpRequest.DONE){
			if(xhr.status === 200){
			  let data = xhr.response;

			    	chatContainer.innerHTML = data;
			    	handleChat();
			    	
			}
		}
	}
	xhr.send();

}

	function handleChat() {

		closeChatBtn = chatContainer.querySelector(".close-chat");
		closeChatBtn.style.display = "none";
		console.log(closeChatBtn);
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
		}, 200);
	 
	}
// -------------------------------------------------------
	function scrollToBottom(){
			
		setTimeout(() => {

			let chatBoxOuter = document.querySelector(".chat-box");
			// console.log("height is");

			// console.log("eight is" , chatBoxOuter.scrollHeight);
	        chatBoxOuter.scrollTop = chatBoxOuter.scrollHeight;

		} , 500);
			
    }