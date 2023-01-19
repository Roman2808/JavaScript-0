var showPrevBtn = document.getElementById("show-prev-btn");
var showNextBtn = document.getElementById("show-next-btn");

showPrevBtn.addEventListener("click", onShowPrevBtnClick);
showNextBtn.addEventListener("click", onNextNextBtnClick);

var imageUrls = [];
imageUrls.push("https://www.google.com/imgres?imgurl=https%3A%2F%2Fcarwow-uk-wp-3.imgix.net%2F18015-MC20BluInfinito-scaled-e1666008987698.jpg&imgrefurl=https%3A%2F%2Fwww.carwow.co.uk%2Fbest%2Fbest-supercars&tbnid=PaeNVryfumS3CM&vet=12ahUKEwjB_sWi9tL8AhVDAhAIHSvDBz8QMygMegUIARDTAQ..i&docid=mi4WKIBBBKYJ4M&w=2560&h=1440&q=car&hl=ru&ved=2ahUKEwjB_sWi9tL8AhVDAhAIHSvDBz8QMygMegUIARDTAQ");
imageUrls.push("https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.drive.com.au%2Fdrive-car-of-the-year%2F2022%2Fdrive-car-of-the-year-winners-list%2F&psig=AOvVaw2orSSPALI2mqEpao05YkiC&ust=1674193320600000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCLix_aL20vwCFQAAAAAdAAAAABAE");
imageUrls.push("https://www.google.com/imgres?imgurl=https%3A%2F%2Ffile.kelleybluebookimages.com%2Fkbb%2Fbase%2Fevox%2FCP%2F15180%2F2023-Chevrolet-Corvette-front_15180_032_1838x654_GA7_cropped.png&imgrefurl=https%3A%2F%2Fwww.kbb.com%2Fcars%2F&tbnid=z-d-hD889Ad7WM&vet=12ahUKEwjB_sWi9tL8AhVDAhAIHSvDBz8QMygOegUIARDXAQ..i&docid=ykxAo2RfK2XE1M&w=1838&h=654&q=car&hl=ru&ved=2ahUKEwjB_sWi9tL8AhVDAhAIHSvDBz8QMygOegUIARDXAQ");
imageUrls.push("https://www.google.com/url?sa=i&url=https%3A%2F%2Fru.freepik.com%2Fphotos%2Fcar&psig=AOvVaw2orSSPALI2mqEpao05YkiC&ust=1674193320600000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCLix_aL20vwCFQAAAAAdAAAAABAJ");


function onShowPrevBtnClick() {
    console.log("prev clicked");
}

function onNextNextBtnClick() {
    console.log("next clicked");
}
