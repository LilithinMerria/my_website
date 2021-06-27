import header from "./nav.js";
import main from "./main_section.js";
import footer from "./footer.js";

// Creation of the container div
const container = document.createElement("div");
container.classList.add("container");
document.querySelector("body").prepend(container);

// Creation of content-wrapper div
const content = document.createElement("div");
content.classList.add("content-wrapper");

// Append the header, main_section, and footer to the content-wrapper div
container.prepend(header, main, footer);









