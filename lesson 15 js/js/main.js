function addErrorClass(elementId) {
    var element = document.getElementById(elementId);
    element.className = "error-input";
}

function addErrorClassToAllInputs() {
    // debugger;
    addErrorClass("first-name");
    addErrorClass("last-name");
    addErrorClass("address");
}

// addErrorClass("last-name");

// window.setTimeout(addErrorClassToAllInputs, 2000);


var sendButton = document.getElementById("send-button");

// addErrorClass();

sendButton.addEventListener("click", onSendButtonClick);

function onSendButtonClick() {
    addErrorClass("last-name");
}

function onFirstNameKeyup() {
    addErrorClass("first-name");
}

var firstNameEl = document.getElementById("first-name");

firstNameEl.addEventListener("keyup", onFirstNameKeyup);