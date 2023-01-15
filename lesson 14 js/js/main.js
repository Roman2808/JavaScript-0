function addErrorClass(elementId) {
    var element = document.getElementById(elementId);
    element.className = "error-input";
}

function addErrorClassToAllInputs() {
    debugger;
    addErrorClass("first-name");
    addErrorClass("last-name");
    addErrorClass("address");
}

// addErrorClass("last-name");

window.setTimeout(addErrorClassToAllInputs, 2000);


var sendButton = document.getElementById("send-button");

sendButton.addEventListener("click", addErrorClassToAllInputs);