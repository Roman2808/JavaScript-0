var slider1 = {
  imageUrls: [],
  currentImageIndex: 0,
  showPrevBtn: document.getElementById("show-prev-btn"),
  showNextBtn: document.getElementById("show-next-btn"),
  slideImage: document.getElementById("slide-img"),

  start: function () {
    // subscribe to events
    this.showPrevBtn.addEventListener("click", this.onShowPrevBtnClick);
    this.showNextBtn.addEventListener("click", this.onNextNextBtnClick);

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
      showPrevBtn.disabled = true;
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
