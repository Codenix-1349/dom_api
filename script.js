console.clear();

/* 1. Select Elements and Log to Console:  */
const h1 = document.getElementsByTagName("h1");
console.log(h1);

const allAElements = document.getElementsByClassName("nav-item");
console.log(allAElements);

const btnElement = document.getElementsByClassName("btn");
console.log(btnElement);

/* 2. Modify Styles: */
/* Change the background color of the .header element to #b5651d */
const header = document.querySelector("header");
header.style.backgroundColor = "#b5651d";

/* Change the font size of the h1 element inside the .hero-content div to 3rem */
const h1Element = document.querySelector("h1");
h1Element.style.fontSize = "3rem";

/* Change the text color of all a elements inside the .nav-list to #faf0e6 */
const navLinks = document.querySelectorAll(".nav-list a");
navLinks.forEach((link) => (link.style.color = "#f5f8ff"));

/* AddElement   */
const heroContent = document.querySelector(".hero-content");
const newParagraph = document.createElement("p");
newParagraph.textContent = "Open daily from 7 AM to 9 PM.";
heroContent.appendChild(newParagraph);
