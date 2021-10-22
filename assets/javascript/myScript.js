console.log("Success");

// menu button (burger) -------------------------------------------------------------

let menu = document.querySelector(".navbar-nav");
let menuBtn = document.querySelector(".navbar-toggler");
let closeIcon = document.querySelector(".fa-window-close");
let openIcon = document.querySelector(".fa-bars");
let mainNavFrame = document.querySelector("#main-nav-container");

menuBtn.addEventListener("click", displayMenu);

menu.classList.contains("show-menu");

function displayMenu(){
    if (menu.classList.contains("show-menu")){
        menu.classList.remove("show-menu");
        closeIcon.style.display = "none";
        mainNavFrame.style.display = "none";
        openIcon.style.display = "block";
    } else {
        menu.classList.add("show-menu");
        closeIcon.style.display = "block";
        openIcon.style.display = "none";
        mainNavFrame.style.display = "block";
    }
}