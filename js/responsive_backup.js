

let users_list = document.getElementsByClassName("users-list-container");

// let users_container = document.getElementsByClassName("users-container");

// let users_container_width = users_container[0].clientWidth;

let search_bar = document.querySelector(".users-container .search-bar");

let search_btn = document.querySelector(".users-container .search-icon");

let preValue = users_container_width ;

let medSize = false ;
let smallSize = false ;
let lastWidthState = null ;

// toggleSearchBar();

window.onload = () => {
   users_container_width = users_container[0].clientWidth;
   if ((users_container_width >= 575) & (users_container_width < 767))
      lastWidthState = "small" ;
   else if (users_container_width >= 767) 
      lastWidthState = "mid" ; 
}

setInterval( () => {  //------ on every change -------
   
   users_container_width = users_container[0].clientWidth;
   if(preValue != users_container_width) {
      
      preValue = users_container_width ;
      checkWidthSize();
      checkLastSavedSize();
   }
   
}, 300);

function checkWidthSize() {
   if ((users_container_width >= 575) & (users_container_width < 767)) {
      medSize = false ;
      smallSize = true ;     
   } else if (users_container_width >= 767) {
      medSize = true ;
      smallSize = false ;
   }
}

function checkLastSavedSize() {
   if(lastWidthState == "mid") {
      if((medSize == false) & (smallSize == true)) {

      }
   } else if(lastWidthState == "small") {
      if((medSize == true) & (smallSize == false)) {

      }
   }
}
function toggleSearchBar() {
   if ((users_container_width >= 575) & (users_container_width < 767)) {
      // console.log("changed   f");
      if(!search_bar.classList.contains("hidden"))
         search_bar.classList.add("hidden");
      else if(search_bar.classList.contains("hidden"))
         search_bar.classList.remove("hidden");

      search_bar.onblur = function() {

          search_btn.click(); 
          while(search_btn.classList.contains("active")) 
            search_btn.classList.remove("active");

            
      }
      search_btn.addEventListener('click' , ()=> {

         if(!search_bar.classList.contains("hidden")) {
            search_bar.classList.add("hidden");
         } else {
            search_bar.classList.remove("hidden");
            setTimeout(()=> {
                search_bar.focus();  
            } , 90);
            
         }
      
      });
   
   } else {
      if(search_bar.classList.contains("hidden")) 
            search_bar.classList.remove("hidden");
   } 


}

