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
$(".cars-s-l").hide().eq(carSelectorLeftSale).show().addClass("random-car-sale");

let carSelectorMiddleSale = Math.floor(Math.random() * $(".cars-s-m").length);
$(".cars-s-m").hide().eq(carSelectorMiddleSale).show().addClass("random-car-sale");

let carSelectorRightSale = Math.floor(Math.random() * $(".cars-s-r").length);
$(".cars-s-r").hide().eq(carSelectorRightSale).show();

let carSelectorLeftRent = Math.floor(Math.random() * $(".cars-r-l").length);
$(".cars-r-l").hide().eq(carSelectorLeftRent).show();

let carSelectorMiddleRent = Math.floor(Math.random() * $(".cars-r-m").length);
$(".cars-r-m").hide().eq(carSelectorMiddleRent).show();

let carSelectorRightRent = Math.floor(Math.random() * $(".cars-r-r").length);
$(".cars-r-r").hide().eq(carSelectorRightRent).show();

// improved responsive design accirding to screen size ------------------------------------------

if($(this).width() <1450){
  $("#third-car").addClass("hidden");
  $(".cars-for-sale .col-md-4").each(function(){
    $(this).removeClass("col-md-4").addClass("col-md-6")
  });
}

if($(this).width() <950){
  $("#third-car").removeClass("hidden");
  $(".cars-for-sale .col-md-6").each(function(){
    $(this).removeClass("col-md-6").addClass("col-md-12")
  });
}


// locations map on index page --------------------------------------------------------

// function initMap() {
//  let googleMap = new google.maps.Map(document.getElementById("location-map"), {
//    zoom: 3,
//    center: {
//      lat: 51.585255,
//      lng: 5.056375
//    }
//  });
//}

// shows car details from index page ---------------------------------------------------

function showCarDetailsSl(){
  let show = document.querySelector(".car-list-item");
  let hide = document.querySelector(".main-content-section");
  let imgSrcFirst = $(".cars-s-l.random-car-sale").find(".first-image-small").attr("src");
  let imgSrcSecond = $(".cars-s-l.random-car-sale").find(".second-image-small").attr("src");
  let imgSrcThird = $(".cars-s-l.random-car-sale").find(".third-image-small").attr("src");
  let imgSrcFourth = $(".cars-s-l.random-car-sale").find(".fourth-image-small").attr("src");
  $("#first-image-details").attr("src", imgSrcFirst);
  $("#second-image-details").attr("src", imgSrcSecond);
  $("#third-image-details").attr("src", imgSrcThird);
  $("#fourth-image-details").attr("src", imgSrcFourth);
  show.classList.toggle("show");
  hide.classList.toggle("hide");
}

function showCarDetailsSm(){
  let show = document.querySelector(".car-list-item");
  let hide = document.querySelector(".main-content-section");
  let imgSrcFirst = $(".cars-s-m.random-car-sale").find(".first-image-small").attr("src");
  let imgSrcSecond = $(".cars-s-m.random-car-sale").find(".second-image-small").attr("src");
  let imgSrcThird = $(".cars-s-m.random-car-sale").find(".third-image-small").attr("src");
  let imgSrcFourth = $(".cars-s-m.random-car-sale").find(".fourth-image-small").attr("src");
  $("#first-image-details").attr("src", imgSrcFirst);
  $("#second-image-details").attr("src", imgSrcSecond);
  $("#third-image-details").attr("src", imgSrcThird);
  $("#fourth-image-details").attr("src", imgSrcFourth);
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

// moves to next and previous pictures in popup window ----------------------------------------------------------------------

function nextCarouselItem(){
  let currentPicture = document.querySelector(".active");
  let nextPicture = currentPicture.nextElementSibling;
  if(nextPicture == null){
    return;
    } else {
    currentPicture.classList.remove("active");
    nextPicture.classList.add("active");
  }
}

function previousCarouselItem(){
  let currentPicture = document.querySelector(".active");
  let previousPicture = currentPicture.previousElementSibling;
  if (previousPicture == null){
    return;
    } else {
    currentPicture.classList.remove("active");
    previousPicture.classList.add("active");
  }
}