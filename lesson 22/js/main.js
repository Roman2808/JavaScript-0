// work with car
window.alert(car1.isTurnOn);
car1.start();
window.alert(car1.isTurnOn);




// find elements
var showPrevBtn = document.getElementById("show-prev-btn");
var showNextBtn = document.getElementById("show-next-btn");
var slideImge = document.getElementById("slide-img");

// subscribe to events
showPrevBtn.addEventListener("click", onShowPrevBtnClick);
showNextBtn.addEventListener("click", onNextNextBtnClick);

// create image array
var imageUrls = [];
imageUrls.push("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfjZVch_qrGzgJ7g9e25Tnb9mpTzuR6vGp3Q&usqp=CAU");
imageUrls.push("https://play-lh.googleusercontent.com/Ip_LzDVSk0AuWeJqJJC6qmcH9jl31FIdfsvl3AcG-lxJNu0R0nqyhTZF1-9izOvEdQ=w526-h296-rw");
imageUrls.push("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMV-Je_UM9zxsU_3Lhd2hjt-H4wElQaTt9Fg&usqp=CAU");
imageUrls.push("https://img.freepik.com/premium-photo/generic-and-brandless-modern-sport-car_110488-1758.jpg?w=2000");

var currentImageIndex = 0;

slideImge.src = imageUrls[currentImageIndex];
showPrevBtn.disabled = true;

// function definition
function onShowPrevBtnClick() {
    currentImageIndex--;
    slideImge.src = imageUrls[currentImageIndex];
    showNextBtn.disabled = false;

    // disable prev button is need
    if (currentImageIndex === 0 ){
        showPrevBtn.disabled = true;
    }
}

function onNextNextBtnClick() {
    currentImageIndex++;
    slideImge.src = imageUrls[currentImageIndex];
    showPrevBtn.disabled = false;

    // disable next button is need
    if (currentImageIndex === (imageUrls.length - 1) ){
        showNextBtn.disabled = true;
    }
    
}
