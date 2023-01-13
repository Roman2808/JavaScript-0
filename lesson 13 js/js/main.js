function alertValues(elementParameter) {
    // console.log(elementParameter.value);
    // console.log(elementParameter.className);
}

function getEl(id) {
    var el = document.getElementById(id);
    return el;
}

var firstNameId = "first-name";
var firstNameEl =  getEl(firstNameId);
// alertFirstNameValues();
alertValues(firstNameEl);

var lastNameId = "last-name";
var lastNameEl =  getEl(lastNameId);
alertValues(lastNameEl);

var addressId = "address";
var addressEl =  getEl(addressId);
alertValues(addressEl )

var citiesId = "cities";
var citiesEl =  getEl(citiesId);
alertValues(citiesEl);

var hobbiesId = "hobbies";
var hobbiesEl =  getEl(hobbiesId);
alertValues(hobbiesEl)

var avatarWrapperId = "avatar-wrapper";
var avatarWrapperEl =  getEl(avatarWrapperId);
var avatarId = "avatar";
var avatarEl =  getEl(avatarId);

// если тому что слева присваивается то что справа от оператора присваивания то
// это значит что firstNameEl.value приобретет новое значение Лана
firstNameEl.value = "Lana";
// console.log(firstNameEl.value);
// console.log(firstNameEl.className);

// lastNameEl.value = "Egorova";
lastNameEl.className = "last-name-input default-input error-input";
// console.log(lastNameEl.value);
// console.log(lastNameEl.className);

lastNameEl.title = "Wrong last name";
// console.log(lastNameEl.value);
// console.log(lastNameEl.className);

firstNameEl.className = "new-class";
// console.log(firstNameEl.value);
// console.log(firstNameEl.className);

avatarEl.src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK__zgU7_Eiudx6weoFKV9inm8aANKqHSp8g&usqp=CAU";

avatarEl.title = "I am avatar";

citiesEl.value = "Hordogoy";

hobbiesEl.value = "I have not interest";

avatarWrapperEl.innerHTML = "<ul id='list'><li>1</li><li>2</li></ul>";

var listId = "list";
var numberList = document.getElementById(listId);

// console.log(numberList.innerHTML);
