const projectObject = {
  pageTitle: "LATEST PROJECTS",
  first: {
    image: "./images/my_website.png",
    project: "Project | 01",
    title: "Yves Arthur",
    paragraph: "My own website made with html5, css3, and javascript via js-injection method.",
    link: "https://yvesarthur.web.app",
    github: "https://github.com/LilithinMerria/my_website"
  },
  second : {
    image: "./images/jaiewhy.png",
    project: "Project | 02",
    title: "Jaie Why",
    paragraph: "A website for one of the reggae musicians in Nepal.",
    link: "https://jaiewhy.web.app/",
    github: "https://github.com/LilithinMerria/JaieWhyPro"
  },
  third: {
    image: "./images/microsoft.png",
    project: "Project | 03",
    title: "Microsoft Stock Market Analysis (Git Repository)",
    paragraph: "Analysing a Microsoft Stock Market Dataset and making a Simple Trading Strategy  using Python.",
    github: "https://github.com/LilithinMerria/microsoftstockanalysis"
  },
  fourth: {
    image: "./images/garden.png",
    project: "Project | 04",
    title: "Garden Web Application",
    paragraph: "Building a Web Application with Reactjs",
    link: "https://mygarden-54713.web.app/home",
    github: "https://github.com/LilithinMerria/garden"
  },
  fifth: {
    image: "./images/automobile.png",
    project: "Project | 05",
    title: "Automobile Analysis",
    paragraph: "Analysing an automobile dataset in order to predict the price based on the features provided.",
    github: "https://github.com/LilithinMerria/automobile_analysis"
  }
};

const projectData = `
  <h1>${projectObject.pageTitle}</h1>

  <a href="${projectObject.first.link}" id="first-project-imageL" class="project-image-links">
    <img src="${projectObject.first.image}" id="first-project-image" class="project-image" alt="The image of the first project">
  </a>
  <div id="p1" class="right-sideP">
    <p class="resumeList" id="project-one">${projectObject.first.project}</p>
    <h4>${projectObject.first.title}</h4>
    <h5><a href="${projectObject.first.github}">Git Link</a></h5>
    <p>${projectObject.first.paragraph}</p>
  </div>

  <a href="${projectObject.second.link}" id="second-project-imageL" class="project-image-links">
    <img src="${projectObject.second.image}" id="second-project-image" class="project-image" alt="The image of the second project">
  </a>
  <div id="p2" class="right-sideP">
    <p class="resumeList" id="project-two">${projectObject.second.project}</p>
    <h4>${projectObject.second.title}</h4>
    <h5><a href="${projectObject.second.github}">Git Link</h5>
    <p>${projectObject.second.paragraph}</p>
  </div>

  <a href="${projectObject.third.github}" id="third-project-imageL" class="project-image-links">
    <img src="${projectObject.third.image}" id="third-project-image" class="project-image" alt="The image of the third project">
  </a>
  <div id="p3" class="right-sideP">
    <p class="resumeList" id="project-three">${projectObject.third.project}</p>
    <h4>${projectObject.third.title}</h4>
    <h5><a href="${projectObject.third.github}">Git Link</a></h5>
    <p>${projectObject.third.paragraph}</p>
  </div>

  <a href="${projectObject.fourth.link}" id="fourth-project-imageL" class="project-image-links">
    <img src="${projectObject.fourth.image}" id="fourth-project-image" class="project-image" alt="The image of the fourth project">
  </a>
  <div id="p4" class="right-sideP">
    <p class="resumeList" id="project-four">${projectObject.fourth.project}</p>
    <h4>${projectObject.fourth.title}</h4>
    <h5><a href="${projectObject.fourth.github}">Git Link</a></h5>
    <p>${projectObject.fourth.paragraph}</p>
  </div>

  <a href="${projectObject.fifth.github}" id="fifth-project-imageL" class="project-image-links">
    <img src="${projectObject.fifth.image}" id="fifth-project-image" class="project-image" alt="The image of the fifth project">
  </a>
  <div id="p5" class="right-sideP">
    <p class="resumeList" id="project-five">${projectObject.fifth.project}</p>
    <h4>${projectObject.fifth.title}</h4>
    <h5><a href="${projectObject.fifth.github}">Git Link </a></h5>
    <p>${projectObject.fifth.paragraph}</p>
  </div>







`

const projectSection = document.createElement("div");
projectSection.setAttribute("id", "project-section");
projectSection.classList.add("content-wrapper");
projectSection.innerHTML = projectData;

export default projectSection;