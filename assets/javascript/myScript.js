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
$(".cars-s-r").hide().eq(carSelectorRightSale).show().addClass("random-car-sale");

// selects random cars for rent to display on index page -----------------------------------

let carSelectorLeftRent = Math.floor(Math.random() * $(".cars-r-l").length);
$(".cars-r-l").hide().eq(carSelectorLeftRent).show().addClass("random-car-sale");

let carSelectorMiddleRent = Math.floor(Math.random() * $(".cars-r-m").length);
$(".cars-r-m").hide().eq(carSelectorMiddleRent).show().addClass("random-car-sale");

let carSelectorRightRent = Math.floor(Math.random() * $(".cars-r-r").length);
$(".cars-r-r").hide().eq(carSelectorRightRent).show().addClass("random-car-sale");

// adjusts clases for smaller displays -----------------------------------------------------------

if($(this).width() <1450){
  $("#third-car").addClass("hidden");
  $("#third-car-rent").addClass("hidden");
  $(".cars-for-sale .col-md-4").each(function(){
    $(this).removeClass("col-md-4").addClass("col-md-6")
  });
  $(".cars-for-rent .col-md-4").each(function(){
    $(this).removeClass("col-md-4").addClass("col-md-6")
  });
}

if($(this).width() <950){
  $("#third-car").removeClass("hidden");
  $("#third-car-rent").removeClass("hidden");
  $(".cars-for-sale .col-md-6").each(function(){
    $(this).removeClass("col-md-6").addClass("col-md-12")
  });
  $(".cars-for-rent .col-md-6").each(function(){
    $(this).removeClass("col-md-6").addClass("col-md-12")
  });
}


// shows car details from index page (SALE)---------------------------------------------------

function showCarDetailsSl(){
  let show = document.querySelector(".car-list-item");
  let hide = document.querySelector(".main-content-section");
  let imgSrcFirst = $(".cars-s-l.random-car-sale").find(".first-image-small").attr("src");
  let imgSrcSecond = $(".cars-s-l.random-car-sale").find(".second-image-small").attr("src");
  let imgSrcThird = $(".cars-s-l.random-car-sale").find(".third-image-small").attr("src");
  let imgSrcFourth = $(".cars-s-l.random-car-sale").find(".fourth-image-small").attr("src");
  let make = $(".cars-s-l.random-car-sale").find(".make").text();
  let model = $(".cars-s-l.random-car-sale").find(".model").text();
  let year = $(".cars-s-l.random-car-sale").find(".year").text();
  let fuel = $(".cars-s-l.random-car-sale").find(".fuel").text();
  let engine = $(".cars-s-l.random-car-sale").find(".engine").text();
  let gearbox = $(".cars-s-l.random-car-sale").find(".gearbox").text();
  let milage = $(".cars-s-l.random-car-sale").find(".milage").text();
  let apk = $(".cars-s-l.random-car-sale").find(".apk").text();
  let color = $(".cars-s-l.random-car-sale").find(".color").text();
  let price = $(".cars-s-l.random-car-sale").find(".price").text();
  let descriptionLeft = $(".cars-s-l.random-car-sale").find(".description-first").text();
  let descriptionMiddle = $(".cars-s-l.random-car-sale").find(".description-second").text();
  let descriptionRight = $(".cars-s-l.random-car-sale").find(".description-third").text();
  $("#first-image-details").attr("src", imgSrcFirst);
  $("#second-image-details").attr("src", imgSrcSecond);
  $("#third-image-details").attr("src", imgSrcThird);
  $("#fourth-image-details").attr("src", imgSrcFourth);
  $("#make").text(make);
  $("#model").text(model);
  $("#year").text(year);
  $("#fuel").text(fuel);
  $("#engine").text(engine);
  $("#gearbox").text(gearbox);
  $("#milage").text(milage);
  $("#apk").text(apk);
  $("#color").text(color);
  $("#price").text(price);
  $("#left-side-description-p").text(descriptionLeft);
  $("#middle-side-description-p").text(descriptionMiddle);
  $("#right-side-description-p").text(descriptionRight);
  show.classList.toggle("show");
  hide.classList.toggle("hide");
  window.scrollTo(0,0);
}

function showCarDetailsSm(){
  let show = document.querySelector(".car-list-item");
  let hide = document.querySelector(".main-content-section");
  let imgSrcFirst = $(".cars-s-m.random-car-sale").find(".first-image-small").attr("src");
  let imgSrcSecond = $(".cars-s-m.random-car-sale").find(".second-image-small").attr("src");
  let imgSrcThird = $(".cars-s-m.random-car-sale").find(".third-image-small").attr("src");
  let imgSrcFourth = $(".cars-s-m.random-car-sale").find(".fourth-image-small").attr("src");
  let make = $(".cars-s-m.random-car-sale").find(".make").text();
  let model = $(".cars-s-m.random-car-sale").find(".model").text();
  let year = $(".cars-s-m.random-car-sale").find(".year").text();
  let fuel = $(".cars-s-m.random-car-sale").find(".fuel").text();
  let engine = $(".cars-s-m.random-car-sale").find(".engine").text();
  let gearbox = $(".cars-s-m.random-car-sale").find(".gearbox").text();
  let milage = $(".cars-s-m.random-car-sale").find(".milage").text();
  let apk = $(".cars-s-m.random-car-sale").find(".apk").text();
  let color = $(".cars-s-m.random-car-sale").find(".color").text();
  let price = $(".cars-s-m.random-car-sale").find(".price").text();
  let descriptionLeft = $(".cars-s-m.random-car-sale").find(".description-first").text();
  let descriptionMiddle = $(".cars-s-m.random-car-sale").find(".description-second").text();
  let descriptionRight = $(".cars-s-m.random-car-sale").find(".description-third").text();
  $("#first-image-details").attr("src", imgSrcFirst);
  $("#second-image-details").attr("src", imgSrcSecond);
  $("#third-image-details").attr("src", imgSrcThird);
  $("#fourth-image-details").attr("src", imgSrcFourth);
  $("#make").text(make);
  $("#model").text(model);
  $("#year").text(year);
  $("#fuel").text(fuel);
  $("#engine").text(engine);
  $("#gearbox").text(gearbox);
  $("#milage").text(milage);
  $("#apk").text(apk);
  $("#color").text(color);
  $("#price").text(price);
  $("#left-side-description-p").text(descriptionLeft);
  $("#middle-side-description-p").text(descriptionMiddle);
  $("#right-side-description-p").text(descriptionRight);
  show.classList.toggle("show");
  hide.classList.toggle("hide");
  window.scrollTo(0,0);
}

function showCarDetailsSr(){
  let show = document.querySelector(".car-list-item");
  let hide = document.querySelector(".main-content-section");
  let imgSrcFirst = $(".cars-s-r.random-car-sale").find(".first-image-small").attr("src");
  let imgSrcSecond = $(".cars-s-r.random-car-sale").find(".second-image-small").attr("src");
  let imgSrcThird = $(".cars-s-r.random-car-sale").find(".third-image-small").attr("src");
  let imgSrcFourth = $(".cars-s-r.random-car-sale").find(".fourth-image-small").attr("src");
  let make = $(".cars-s-r.random-car-sale").find(".make").text();
  let model = $(".cars-s-r.random-car-sale").find(".model").text();
  let year = $(".cars-s-r.random-car-sale").find(".year").text();
  let fuel = $(".cars-s-r.random-car-sale").find(".fuel").text();
  let engine = $(".cars-s-r.random-car-sale").find(".engine").text();
  let gearbox = $(".cars-s-r.random-car-sale").find(".gearbox").text();
  let milage = $(".cars-s-r.random-car-sale").find(".milage").text();
  let apk = $(".cars-s-r.random-car-sale").find(".apk").text();
  let color = $(".cars-s-r.random-car-sale").find(".color").text();
  let price = $(".cars-s-r.random-car-sale").find(".price").text();
  let descriptionLeft = $(".cars-s-r.random-car-sale").find(".description-first").text();
  let descriptionMiddle = $(".cars-s-r.random-car-sale").find(".description-second").text();
  let descriptionRight = $(".cars-s-r.random-car-sale").find(".description-third").text();
  $("#first-image-details").attr("src", imgSrcFirst);
  $("#second-image-details").attr("src", imgSrcSecond);
  $("#third-image-details").attr("src", imgSrcThird);
  $("#fourth-image-details").attr("src", imgSrcFourth);
  $("#make").text(make);
  $("#model").text(model);
  $("#year").text(year);
  $("#fuel").text(fuel);
  $("#engine").text(engine);
  $("#gearbox").text(gearbox);
  $("#milage").text(milage);
  $("#apk").text(apk);
  $("#color").text(color);
  $("#price").text(price);
  $("#left-side-description-p").text(descriptionLeft);
  $("#middle-side-description-p").text(descriptionMiddle);
  $("#right-side-description-p").text(descriptionRight);
  show.classList.toggle("show");
  hide.classList.toggle("hide");
  window.scrollTo(0,0);
}

// shows car details from index page (RENT)---------------------------------------------------

function showCarDetailsRl(){
  let show = document.querySelector(".car-list-item-rent");
  let hide = document.querySelector(".main-content-section");
  let imgSrcFirst = $(".cars-r-l.random-car-sale").find(".first-image-small").attr("src");
  let imgSrcSecond = $(".cars-r-l.random-car-sale").find(".second-image-small").attr("src");
  let imgSrcThird = $(".cars-r-l.random-car-sale").find(".third-image-small").attr("src");
  let imgSrcFourth = $(".cars-r-l.random-car-sale").find(".fourth-image-small").attr("src");
  let make = $(".cars-r-l.random-car-sale").find(".make").text();
  let model = $(".cars-r-l.random-car-sale").find(".model").text();
  let year = $(".cars-r-l.random-car-sale").find(".year").text();
  let fuel = $(".cars-r-l.random-car-sale").find(".fuel").text();
  let engine = $(".cars-r-l.random-car-sale").find(".engine").text();
  let gearbox = $(".cars-r-l.random-car-sale").find(".gearbox").text();
  let milage = $(".cars-r-l.random-car-sale").find(".milage-limit").text();
  let apk = $(".cars-r-l.random-car-sale").find(".discount").text();
  let color = $(".cars-r-l.random-car-sale").find(".color").text();
  let price = $(".cars-r-l.random-car-sale").find(".price").text();
  let descriptionLeft = $(".cars-r-l.random-car-sale").find(".description-first").text();
  let descriptionMiddle = $(".cars-r-l.random-car-sale").find(".description-second").text();
  let descriptionRight = $(".cars-r-l.random-car-sale").find(".description-third").text();
  $("#first-image-details-rent").attr("src", imgSrcFirst);
  $("#second-image-details-rent").attr("src", imgSrcSecond);
  $("#third-image-details-rent").attr("src", imgSrcThird);
  $("#fourth-image-details-rent").attr("src", imgSrcFourth);
  $("#make").text(make);
  $("#model").text(model);
  $("#year").text(year);
  $("#fuel").text(fuel);
  $("#engine").text(engine);
  $("#gearbox").text(gearbox);
  $("#milage-limit").text(milage);
  $("#discount").text(apk);
  $("#color").text(color);
  $("#price").text(price);
  $("#left-side-description-p").text(descriptionLeft);
  $("#middle-side-description-p").text(descriptionMiddle);
  $("#right-side-description-p").text(descriptionRight);
  show.classList.toggle("show");
  hide.classList.toggle("hide");
  window.scrollTo(0,0);
}

// hides car details from index page (returns back to default index screen)-----------------------------------------------------

function hideCarDetailsSale(){
  let show = document.querySelector(".car-list-item");
  let hide = document.querySelector(".main-content-section");
  let currentPicture = document.querySelector(".active");
  show.classList.remove("show");
  hide.classList.remove("hide");
  currentPicture.classList.remove("active");
  $("#first-sale").addClass("active");
}

function hideCarDetailsRent(){
  let show = document.querySelector(".car-list-item-rent");
  let hide = document.querySelector(".main-content-section");
  let currentPicture = document.querySelector(".active");
  show.classList.remove("show");
  hide.classList.remove("hide");
  currentPicture.classList.remove("active");
  $("#first-rent").addClass("active");
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

// moves to next and previous pictures in popup window SALE ----------------------------------------------------------------------

function nextCarouselItemSale(){
  let carouselType = document.querySelector(".car-list-item");
  let currentPicture = carouselType.querySelector(".active");
  let nextPicture = currentPicture.nextElementSibling;
  if(nextPicture == null){
    return;
    } else {
    currentPicture.classList.remove("active");
    nextPicture.classList.add("active");
  }
}

function previousCarouselItemSale(){
  let currentPicture = document.querySelector(".active");
  let previousPicture = currentPicture.previousElementSibling;
  if (previousPicture == null){
    return;
    } else {
    currentPicture.classList.remove("active");
    previousPicture.classList.add("active");
  }
}

// moves to next and previous pictures in popup window RENT ----------------------------------------------------------------------

function nextCarouselItemRent(){
  let carouselType = document.querySelector(".car-list-item-rent");
  let currentPicture = carouselType.querySelector(".active");
  let nextPicture = currentPicture.nextElementSibling;
  if(nextPicture == null){
    return;
    } else {
    currentPicture.classList.remove("active");
    nextPicture.classList.add("active");
  }
}

function previousCarouselItemRent(){
  let carouselType = document.querySelector(".car-list-item-rent");
  let currentPicture = carouselType.querySelector(".active");
  let previousPicture = currentPicture.previousElementSibling;
  if (previousPicture == null){
    return;
    } else {
    currentPicture.classList.remove("active");
    previousPicture.classList.add("active");
  }
}

// shows car details on cars for sale and rent page -----------------------------------------------------------------------------------


function clickedCarSale(carsId) {
  console.log (carsId);
  showCarDetails();
  function showCarDetails() {
    let show = document.querySelector(".car-list-item");
    let hide = document.querySelector(".main-content-section");
    let imgSrcFirst = $("#" + carsId).find(".first-image-small").attr("src");
    let imgSrcSecond = $("#" + carsId).find(".second-image-small").attr("src");
    let imgSrcThird = $("#" + carsId).find(".third-image-small").attr("src");
    let imgSrcFourth = $("#" + carsId).find(".fourth-image-small").attr("src");
    let make = $("#" + carsId).find(".make").text();
    let model = $("#" + carsId).find(".model").text();
    let year = $("#" + carsId).find(".year").text();
    let fuel = $("#" + carsId).find(".fuel").text();
    let engine = $("#" + carsId).find(".engine").text();
    let gearbox = $("#" + carsId).find(".gearbox").text();
    let milage = $("#" + carsId).find(".milage").text();
    let apk = $("#" + carsId).find(".apk").text();
    let color = $("#" + carsId).find(".color").text();
    let price = $("#" + carsId).find(".price").text();
    let descriptionLeft = $("#" + carsId).find(".description-first").text();
    let descriptionMiddle = $("#" + carsId).find(".description-second").text();
    let descriptionRight = $("#" + carsId).find(".description-third").text();
    $("#first-image-details").attr("src", imgSrcFirst);
    $("#second-image-details").attr("src", imgSrcSecond);
    $("#third-image-details").attr("src", imgSrcThird);
    $("#fourth-image-details").attr("src", imgSrcFourth);
    $("#make").text(make);
    $("#model").text(model);
    $("#year").text(year);
    $("#fuel").text(fuel);
    $("#engine").text(engine);
    $("#gearbox").text(gearbox);
    $("#milage").text(milage);
    $("#apk").text(apk);
    $("#color").text(color);
    $("#price").text(price);
    $("#left-side-description-p").text(descriptionLeft);
    $("#middle-side-description-p").text(descriptionMiddle);
    $("#right-side-description-p").text(descriptionRight);
    show.classList.toggle("show");
    hide.classList.toggle("hide");
    window.scrollTo(0,0);
  }
}

function clickedCarRent(carsId) {
  console.log (carsId);
  showCarDetails();
  function showCarDetails() {
    let show = document.querySelector(".car-list-item-rent");
    let hide = document.querySelector(".main-content-section");
    let imgSrcFirst = $("#" + carsId).find(".first-image-small").attr("src");
    let imgSrcSecond = $("#" + carsId).find(".second-image-small").attr("src");
    let imgSrcThird = $("#" + carsId).find(".third-image-small").attr("src");
    let imgSrcFourth = $("#" + carsId).find(".fourth-image-small").attr("src");
    let make = $("#" + carsId).find(".make").text();
    let model = $("#" + carsId).find(".model").text();
    let year = $("#" + carsId).find(".year").text();
    let fuel = $("#" + carsId).find(".fuel").text();
    let engine = $("#" + carsId).find(".engine").text();
    let gearbox = $("#" + carsId).find(".gearbox").text();
    let milageLimit = $("#" + carsId).find(".milage-limit").text();
    let discount = $("#" + carsId).find(".discount").text();
    let color = $("#" + carsId).find(".color").text();
    let price = $("#" + carsId).find(".price").text();
    let descriptionLeft = $("#" + carsId).find(".description-first").text();
    let descriptionMiddle = $("#" + carsId).find(".description-second").text();
    let descriptionRight = $("#" + carsId).find(".description-third").text();
    $("#first-image-details-rent").attr("src", imgSrcFirst);
    $("#second-image-details-rent").attr("src", imgSrcSecond);
    $("#third-image-details-rent").attr("src", imgSrcThird);
    $("#fourth-image-details-rent").attr("src", imgSrcFourth);
    $("#make").text(make);
    $("#model").text(model);
    $("#year").text(year);
    $("#fuel").text(fuel);
    $("#engine").text(engine);
    $("#gearbox").text(gearbox);
    $("#milage-limit").text(milageLimit);
    $("#discount").text(discount);
    $("#color").text(color);
    $("#price").text(price);
    $("#left-side-description-p").text(descriptionLeft);
    $("#middle-side-description-p").text(descriptionMiddle);
    $("#right-side-description-p").text(descriptionRight);
    show.classList.toggle("show");
    hide.classList.toggle("hide");
    window.scrollTo(0,0);
  }
}