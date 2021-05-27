import nav from "./nav.js";
import mainSection from "./main_section.js";
import footerHere from "./footer.js";

// Creation of the container div
const container = document.createElement("div");
container.classList.add("container");
document.querySelector("body").prepend(container);

// Creation of content-wrapper div
const content = document.createElement("div");
content.classList.add("content-wrapper");

// Creation of the header
const header = document.createElement("header");
header.innerHTML = nav;

// Creation of the main_section and append it to the main tag
const indexSection = document.createElement("section");
indexSection.classList.add("main-section", "content-wrapper");
indexSection.innerHTML = mainSection;
const main = document.querySelector("main");
main.append(indexSection);


// Creation of the footer
const footer = document.createElement("footer");
footer.innerHTML = footerHere;




// Append the header, main_section, and footer to the content-wrapper div
container.append(header,main, footer);

// Append content-wrapper div to header, main, and footer







