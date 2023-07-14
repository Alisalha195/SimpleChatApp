
/*
setInterval( () => {  //------ on every change -------
   
   users_container_width = users_container[0].clientWidth;
   
   if(preValue != users_container_width) {
      preValue = users_container_width ;
   }
}, 200);
*/
 // let usersListXS =  ;

   // let usersListXS = document.getElementsByClassName("user");


   /* function copyUsersListToXS() {
   // let Users = null;
   // usersListXS = document.querySelectorAll(".row.user");

   // let usersListXS = document.getElementsByClassName("user");
   // console.log(usersListXS);
} */


//&&&&&&&&&&&&&&&&&&&&&&&&& USERS PAGE &&&&&&&&&&&&&&&&&&&&&&&&&
//-----------------------------------------------------------
let users_list = document.getElementsByClassName("users-list-container");

let users_list_xs = document.getElementsByClassName("users-list-xs");
let users_list_xs_inner = document.querySelector(".users-list-xs-inner");
// let users_container = document.getElementsByClassName("users-container");

// let users_container_width = users_container[0].clientWidth;

let search_bar = document.querySelector(".users-container .search-bar");

let search_btn = document.querySelector(".users-container .search-icon");

let preValue = users_container_width ;


window.addEventListener('resize', function(event) {
    // console.log(closeChatBtn);
   toggleUsersListXS();
   resetSearchBoxClasses();
   

}, true);

// getUsersListXS();


toggleSearchBar();

resetSearchBoxClasses = () => {

   if (users_container_width < 767) {

      if(searchBtn.classList.contains("active-md")) 
         while(searchBtn.classList.contains("active-md"))
            searchBtn.classList.remove("active-md");

   } else if (users_container_width >= 767)  {

      if(searchBtn.classList.contains("active-sm")) 
            while(searchBtn.classList.contains("active-sm"))
               searchBtn.classList.remove("active-sm");
   }

}

toggleUsersListXS = () => {  //---- show | hide horizental users list---
   if(window.innerWidth < 576) {
      if(users_list_xs[0].classList.contains("hidden")) {
         users_list_xs[0].classList.remove("hidden");
      }

   } else {
      if(!users_list_xs[0].classList.contains("hidden")) {
         users_list_xs[0].classList.add("hidden");
      }
   }
}
handleUsersListXS = () => {  //---- build xs users list using orginal----
   if(window.innerWidth < 576) {
      if(!users_list[0].classList.contains("hidden"))
         users_list[0].classList.add("hidden");

    } else {
      if(users_list[0].classList.contains("hidden"))
         users_list[0].classList.remove("hidden");
    }
}


   setInterval(() =>{
      let xhr = new XMLHttpRequest();
      xhr.open("GET", "php/minUsers.php", true);
      xhr.onload = ()=>{
       if(xhr.readyState === XMLHttpRequest.DONE){
           if(xhr.status === 200){
             let data = xhr.response;
             
             if((!searchBar.classList.contains("active-md")) & (!searchBar.classList.contains("active-sm"))){
               // console.log("ok");
               users_list_xs_inner.innerHTML = data;

               //------------ handle msg icon ------------------
               let msgIcons = document.querySelectorAll(".xs-control .msg-icon");

               msgIcons.forEach(element => {
                  element.onclick = () => { 
                     handleMsgIconXS(element);
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
   }, 700);

function hideStartMsg() {  
   // console.log("dfddfgdfg");
   // if(! startMsg.classList.contains("hidden"))
   //       startMsg.classList.add("hidden");
}
function handleMsgIconXS(target) {

   handleNewChat();

   let url = target.getAttribute("data-url");  //-- chat.php?uid=23423---
   let xhr = new XMLHttpRequest();
   xhr.open("GET", url, true);
   xhr.onload = ()=>{

      if(xhr.readyState === XMLHttpRequest.DONE){
         if(xhr.status === 200){
           let data = xhr.response;
             if(!searchBar.classList.contains("active")){

               chatContainer.innerHTML = data;
               chatContainer.style.display = "block";
               handleChatCloseBtn();
             } 
         }
      }
   }
   xhr.send();
}


setInterval( () => {  //------ on every change -------
   
   users_container_width = users_container[0].clientWidth;
   handleUsersListXS();

}, 200);

function toggleSearchBar() {
   if (users_container_width < 767) {
      if(!search_bar.classList.contains("hidden"))
         search_bar.classList.add("hidden");
      else if(search_bar.classList.contains("hidden"))
         search_bar.classList.remove("hidden");

   } else if(users_container_width >= 767) {
      if(!search_bar.classList.contains("hidden"))
         search_bar.classList.add("hidden");
   }
      search_btn.addEventListener('click' , ()=> {

         if (users_container_width >= 767) {
            if(searchBar.classList.contains("active-md")){
                searchBar.value = "";
                searchBar.classList.remove("active-md");
            }
            if(searchBtn.classList.contains("active-md")) {
            while(searchBtn.classList.contains("active-md"))
               searchBtn.classList.remove("active-md");
            searchBar.blur();
            }
         } else if (users_container_width < 767) {
            if(searchBar.classList.contains("active-sm")){
                searchBar.value = "";
                searchBar.classList.remove("active-sm");
            }
            if(searchBtn.classList.contains("active-sm")) {
            while(searchBtn.classList.contains("active-sm"))
               searchBtn.classList.remove("active-sm");
            searchBar.blur();
            }

            if(!search_bar.classList.contains("hidden")) {
               search_bar.classList.add("hidden");
            } else {
               search_bar.classList.remove("hidden");
               setTimeout(()=> {
                   search_bar.focus();  
               } , 90);
            }
         }

         
      
      });
   
   

}

//----------------------search Box ----------------------------


      searchBar.onblur = ()=>{
         searchBar.value = "";
         if (users_container_width >= 767) {
            while(searchBar.classList.contains("active-md"))
                searchBar.classList.remove("active-md");
            while(searchBtn.classList.contains("active-md"))
               searchBtn.classList.remove("active-md");

         } else if  (users_container_width < 767){
            search_btn.click();
            // console.log("clicked");
            while(searchBar.classList.contains("active-sm"))
                searchBar.classList.remove("active-sm");
            while(searchBtn.classList.contains("active-sm"))
               searchBtn.classList.remove("active-sm");
            if(!search_bar.classList.contains("hidden"))
               search_bar.classList.add("hidden");
         }
      }

      searchBar.onfocus = () => {
         if (users_container_width >= 767) {
            if(!searchBtn.classList.contains("active-md"))
               searchBtn.classList.add("active-md");
         } else if (users_container_width < 767) {
            if(!searchBtn.classList.contains("active-sm"))
               searchBtn.classList.add("active-sm");
         }
      }

      searchBar.onkeyup = () => {
         
         let searchTerm = searchBar.value;
         
          if(searchTerm == "") {
            if (users_container_width >= 767) {
               // searchBar.classList.remove("active-md");
               if(searchBtn.classList.contains("active-md"))
                  searchBtn.classList.remove("active-md");
            } else if (users_container_width < 767) {
               // searchBar.classList.remove("active-sm");
               if(searchBtn.classList.contains("active-sm"))
                  searchBtn.classList.remove("active-sm");
            }
          } else {
            if (users_container_width >= 767) {
               searchBar.classList.add("active-md");
               if(!searchBtn.classList.contains("active-md"))
                  searchBtn.classList.add("active-md");
            } else if (users_container_width < 767) {
               searchBar.classList.add("active-sm");
               if(!searchBtn.classList.contains("active-sm"))
                  searchBtn.classList.add("active-sm");
            }
            
          }
     
         if(users_container_width > 576) {
            let xhr = new XMLHttpRequest();
            xhr.open("POST", "php/search.php", true);
            xhr.onload = ()=>{
               if(xhr.readyState === XMLHttpRequest.DONE){
                   if(xhr.status === 200){
                     let data = xhr.response;
                     usersList.innerHTML = data;
                   }
               }
            }
            xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xhr.send("searchTerm=" + searchTerm);

         } else if(users_container_width <= 576) {
            let xhr = new XMLHttpRequest();
            xhr.open("POST", "php/minSearch.php", true);
            xhr.onload = ()=>{
               if(xhr.readyState === XMLHttpRequest.DONE){
                   if(xhr.status === 200){
                     let data = xhr.response;
                     users_list_xs_inner.innerHTML = data;
                   }
               }
            }
            xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xhr.send("searchTerm=" + searchTerm);
         }
         
      }

//-------------------------------------------------------------

//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

//&&&&&&&&&&&&&&&&&&&&&&&&& PROFILE PAGE &&&&&&&&&&&&&&&&&&&&&&&&&

