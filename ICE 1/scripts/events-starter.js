console.log("germaine")


function clickLink(e) {
    alert("I'm going to take you to " + e.target.innerHTML);
}
function focusButton(e) {
    e.style.backgroundColor = "#000000";
}

let anchors = document.getElementsByTagName('a');
for(let i = 0; i<anchors.length; i++)
{
    anchor = anchors[i];
    anchor.addEventListener('click', clickLink, false);
}


console.log("2")
let list = document.getElementsByTagName('ul')[0];
console.log("5")
let firstItem = document.getElementsByTagName('li')[0];
console.log("45")
let firstItemLink = firstItem.firstChild.nextSibling;
firstItemLink.href = "https://google.com"

let secondItem = document.getElementsByTagName('li')[1];

let secondItemLink = secondItem.firstChild.nextSibling;

secondItemLink.href = "https://w3schools.com"

let lastItem = document.createElement('li');

let lastLink = document.createElement('a');

lastLink.innerHTML = "Durham College";

lastLink.href= "https://durhamcollege.ca/"

lastItem.appendChild(lastLink);

list.appendChild(lastItem);