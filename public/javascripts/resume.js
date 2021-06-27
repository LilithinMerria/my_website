import header from "./nav.js";
import resumeSection from "./resume_data.js";
import footer from "./footer.js";

// Creation of the container div
const container = document.createElement("div");
container.classList.add("container");
document.querySelector("body").prepend(container);

// Creation of content-wrapper div
const content = document.createElement("div");
content.classList.add("content-wrapper");

// Creation of Resume title
const resumeHeader = document.createElement("h1");
resumeHeader.classList.add("content-wrapper");
resumeHeader.innerHTML = "RESUME";

// Append the header, main_section, and footer to the content-wrapper div
container.prepend(header, resumeHeader, resumeSection, footer);

