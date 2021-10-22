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

// selects random cars for sale to display on index page -----------------------------------

let carSelectorLeftSale = Math.floor(Math.random() * $(".cars-s-l").length);
$(".cars-s-l").hide().eq(carSelectorLeftSale).show();

let carSelectorMiddleSale = Math.floor(Math.random() * $(".cars-s-m").length);
$(".cars-s-m").hide().eq(carSelectorMiddleSale).show();

let carSelectorRightSale = Math.floor(Math.random() * $(".cars-s-r").length);
$(".cars-s-r").hide().eq(carSelectorRightSale).show();

let carSelectorLeftRent = Math.floor(Math.random() * $(".cars-r-l").length);
$(".cars-r-l").hide().eq(carSelectorLeftRent).show();

let carSelectorMiddleRent = Math.floor(Math.random() * $(".cars-r-m").length);
$(".cars-r-m").hide().eq(carSelectorMiddleRent).show();

let carSelectorRightRent = Math.floor(Math.random() * $(".cars-r-r").length);
$(".cars-r-r").hide().eq(carSelectorRightRent).show();

// shows car details from index page and adds image src to newly opened pop-up ---------------------------------------------------

function showCarDetails(){
  let show = document.querySelector(".car-list-item");
  let hide = document.querySelector(".main-content-section");
  let imgSrc = $(".item-image-small").attr("src");
  console.log(imgSrc);
  $("#first-image").attr("src", imgSrc);
  show.classList.toggle("show");
  hide.classList.toggle("hide");
}

// hides car details from index page (returns back to default index screen)-----------------------------------------------------

function hideCarDetails(){
  let show = document.querySelector(".car-list-item");
  let hide = document.querySelector(".main-content-section");

  show.classList.remove("show");
  hide.classList.remove("hide");
}