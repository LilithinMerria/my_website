const section = {
    img: "./images/art.jpg",
    title: "Greetings,",
    subTitle: "a bit about me:",
    resume: "MY RESUME",
    work: "MY WORK",
    skills: "MY SKILLS",
    presentation: "I am a hard worker and self-motivated person. "
};

const mainSection = `
    <img id="main-image" src="${section.img}" alt="my picture" class="mainFlex">
    <div id="mainSection" class="mainFlex">
    
      <h1 class="title">${section.title}</h1>
      <h3 id="about-me" class="title">${section.subTitle}</h3>
      <div id="mainLink">
        <p class="resumeList" id="resumeP"><a href="#" class="resumeLink">${section.resume}</a></p>
        <p class="resumeList" id="workP"><a href="#" class="resumeLink">${section.work}</a></p>
        <p class="resumeList" id="skillsP"><a href="#" class="resumeLink">${section.skills}</a></p>
      </div>
      <p id="presentation">${section.presentation}</p>
    </div>

`
// Creation of the main_section and append it to the main tag
const indexSection = document.createElement("section");
indexSection.classList.add("main-section", "content-wrapper");
indexSection.innerHTML = mainSection;
const main = document.querySelector("main");
main.append(indexSection);

export default main;