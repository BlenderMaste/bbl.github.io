let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
    let myName = prompt('please print your name');
    if(!myName) {
        setUserName();
    } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Hello,' + myName;
}
}
if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    myHeading.textContent = 'Mozilla 酷毙了，' + localStorage.getItem('name');
  }
  myButton.onclick = function() {
    setUserName();
 }