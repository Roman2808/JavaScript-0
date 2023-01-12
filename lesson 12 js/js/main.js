function alertFirstNameValues() {
    console.log(firstNameEl.value);
    console.log(firstNameEl.className);
}

function alertLastNameValues() {
    console.log(lastNameEl.value);
    console.log(lastNameEl.classAame);
}

function alertAddressValues() {
    console.log(addressEl.value);
    console.log(addressEl.className)
}

function alertHobbiesValues() {
    console.log(hobbiesEl.value);
    console.log(hobbiesEl.className);
}


// тому что слева мы присваиваем то что справа
var firstNameId = "first-name";
// = это оператор присваивания... то есть то что слева (переменная) ей присваивается значение справа
var firstNameEl = document.getElementById(firstNameId);
alertFirstNameValues();

var lastNameId = "last-name";
var lastNameEl = document.getElementById(lastNameId);
alertLastNameValues();

var addressId = "address";
var addressEl = document.getElementById(addressId);
alertAddressValues()

var citiesId = "cities";
var citiesEl = document.getElementById(citiesId);
// console.log(citiesEl.value);
// console.log(citiesEl.className);

var hobbiesId = "hobbies";
var hobbiesEl = document.getElementById(hobbiesId);
alertHobbiessValues()

var avatarWrapperId = "avatar-wrapper";
var avatarWrapperEl = document.getElementById(avatarWrapperId);
var avatarId = "avatar";
var avatarEl = document.getElementById(avatarId);

// если тому что слева присваивается то что справа от оператора присваивания то
// это значит что firstNameEl.value приобретет новое значение Лана
firstNameEl.value = "Lana";
console.log(firstNameEl.value);
console.log(firstNameEl.className);

// lastNameEl.value = "Egorova";
lastNameEl.className = "last-name-input default-input error-input";
console.log(lastNameEl.value);
console.log(lastNameEl.className);

lastNameEl.title = "Wrong last name";
console.log(lastNameEl.value);
console.log(lastNameEl.className);

firstNameEl.className = "new-class";
console.log(firstNameEl.value);
console.log(firstNameEl.className);

avatarEl.src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK__zgU7_Eiudx6weoFKV9inm8aANKqHSp8g&usqp=CAU";

avatarEl.title = "I am avatar";

citiesEl.value = "Hordogoy";

hobbiesEl.value = "I have not interest";

avatarWrapperEl.innerHTML = "<ul id='list'><li>1</li><li>2</li></ul>";

var listId = "list";
var numberList = document.getElementById(listId);

console.log(numberList.innerHTML);
