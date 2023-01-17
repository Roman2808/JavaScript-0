var buttonPlus = document.getElementById("buttonPlus");
var buttonMinus = document.getElementById("buttonMinus");
var buttonMultiplay = document.getElementById("buttonMultiplay");
var buttonDevide = document.getElementById("buttonDevide");

var input1 = document.getElementById("number1");
var input2 = document.getElementById("number2");

function makeOperation(operationCode) {
    var number1 = Number(input1.value);
    var number2 = Number(input2.value);


    if (operationCode === "+") {
        var result = number1 + number2;
    } else if (operationCode === "-") {
        var result = number1 - number2;
    } else if (operationCode === "*") {
        var result = number1 * number2;
    } else if (operationCode === "/") {
        var result = number1 / number2;
    } else {
        window.alert("operation is unknown");
    }
    window.alert(result);
}

function onOperationButtonClick(eventObject) {
    var clickedElement = eventObject.currentTarget;
    var operation = clickedElement.innerHTML;
    makeOperation(operation);
}

function addCommonEventListener(i) {
    operationButtons[i].addEventListener("click", onOperationButtonClick);
}

var operationButtons = [buttonPlus, buttonMinus, buttonMultiplay, buttonDevide];

addCommonEventListener(0);
addCommonEventListener(1);
addCommonEventListener(2);
addCommonEventListener(3);


var arrayOfNumbers = [13, 24, 56, 100];
var arrayOfStrings = ["Roma", "Lana", "Vika", "Robert"];
