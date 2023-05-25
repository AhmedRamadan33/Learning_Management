let span = document.querySelector(".up");
let header = document.getElementById("header")
let stickyLogo = document.getElementById("stickyLogo")
let imgFluid =document.getElementById("imgFluid")



window.onscroll = function () {
  
  this.scrollY >= 500 ? span.classList.add("active") : span.classList.remove("active");
  this.scrollY >= 180 ? header.classList.add("header_2") : header.classList.remove("header_2");
  // 
  if(scrollY >= 180){
    stickyLogo.style.width = "100px"
    imgFluid.style.width = "0px"
    
  }
  else{
    stickyLogo.style.width = "0px"
    imgFluid.style.width = "100px"
  }

};

// 
span.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};



