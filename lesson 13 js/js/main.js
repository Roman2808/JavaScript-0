// это то же самое что
// function firstNameLog() {
//   var id = "first-name";
//   var el = document.getElementById(id);
//   console.log(el.value);
// }

// function firstNameLog() {
//   var id = "last-name";
//   var el = document.getElementById(id);
//   console.log(el.value);
// }
// что и это
function logValue(id) {
  var el = document.getElementById(id);
  console.log(el.value);
}

function getValue(id) {
  var el = document.getElementById(id);
  return el.value;
}


var firstNameId = "first-name";
var lastNameId = "last-name";

logValue(firstNameId);
logValue(firstNameId);
logValue(firstNameId);

logValue(lastNameId);
logValue(lastNameId);
logValue(lastNameId);

var value = getValue(lastNameId);

window.alert(value);