// тому что слева мы присваиваем то что справа
var firstNameId = "first-name";
// = это оператор присваивания... то есть то что слева (переменная) ей присваивается значение справа
var firstNameEl = document.getElementById(firstNameId);
var lastNameId = "last-name";
var lastNameEl = document.getElementById(lastNameId);
var addressId = "address";
var addressEl = document.getElementById(addressId);
var citiesId = "cities";
var citiesEl = document.getElementById(citiesId);
var hobbiesId = "hobbies";
var hobbiesEl = document.getElementById(hobbiesId);
var avatarWrapperId = "avatar-wrapper";
var avatarWrapperEl = document.getElementById(avatarWrapperId);
var avatarId = "avatar";
var avatarEl = document.getElementById(avatarId);

debugger;
function alertValue() {
    console.log(firstNameEl.value);
    console.log(lastNameEl.value);
    console.log(addressEl.value);
    console.log(citiesEl.value);
}

// если тому что слева присваивается то что справа от оператора присваивания то
// это значит что firstNameEl.value приобретет новое значение Лана
firstNameEl.value = "Lana";

console.log(firstNameEl.value);
console.log(lastNameEl.value);
console.log(addressEl.value);

alertValue();

// lastNameEl.value = "Egorova";
lastNameEl.className = "last-name-input default-input error-input";

alertValue();

lastNameEl.title = "Wrong last name";

alertValue();

avatarEl.src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK__zgU7_Eiudx6weoFKV9inm8aANKqHSp8g&usqp=CAU";

alertValue();

avatarEl.title = "I am avatar";

alertValue();

citiesEl.value = "Hordogoy";

alertValue();

hobbiesEl.value = "I have not interest";

avatarWrapperEl.innerHTML = "<ul id='list'><li>1</li><li>2</li></ul>";

var listId = "list";
var numberList = document.getElementById(listId);

console.log(numberList.innerHTML);
