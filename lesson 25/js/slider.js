function getNewSlider() {
  var newSlider = {
    imageUrls: [],
    currentImageIndex: 0,
  
    showPrevBtn: null, 
    showNextBtn: null,
    slideImage: null, 
  
    start: function (elId) {
      var that = this;
  
      var elSelector = "#" + elId;
      var el = document.querySelector(elSelector);
  
      this.showPrevBtn = el.querySelector(".show-prev-btn");
      this.showNextBtn =  el.querySelector(".show-next-btn");
      this.slideImage = el.querySelector(".slide-img");
  
  
      // subscribe to events
      this.showPrevBtn.addEventListener("click", function(e){
        that.onShowPrevBtnClick(e);
      });
  
      this.showNextBtn.addEventListener("click", function(e){
        that.onNextNextBtnClick(e);
      });
  
      // create image array
      this.imageUrls.push("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfjZVch_qrGzgJ7g9e25Tnb9mpTzuR6vGp3Q&usqp=CAU");
      this.imageUrls.push("https://play-lh.googleusercontent.com/Ip_LzDVSk0AuWeJqJJC6qmcH9jl31FIdfsvl3AcG-lxJNu0R0nqyhTZF1-9izOvEdQ=w526-h296-rw");
      this.imageUrls.push("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMV-Je_UM9zxsU_3Lhd2hjt-H4wElQaTt9Fg&usqp=CAU");
      this.imageUrls.push("https://img.freepik.com/premium-photo/generic-and-brandless-modern-sport-car_110488-1758.jpg?w=2000");
  
      this.slideImage.src = this.imageUrls[this.currentImageIndex];
      this.showPrevBtn.disabled = true;
    },
  
    onShowPrevBtnClick: function (e) {
      this.currentImageIndex--;
      this.slideImage.src = this.imageUrls[this.currentImageIndex];
      this.showNextBtn.disabled = false;
  
      // disable prev button is need
      if (this.currentImageIndex === 0) {
        this.showPrevBtn.disabled = true;
      }
    },
  
    onNextNextBtnClick: function (e) {
      this.currentImageIndex++;
      this.slideImage.src = this.imageUrls[this.currentImageIndex];
      this.showPrevBtn.disabled = false;
  
      // disable next button is need
      if (this.currentImageIndex === this.imageUrls.length - 1) {
        this.showNextBtn.disabled = true;
      }
    },
  };
  return newSlider;
}

