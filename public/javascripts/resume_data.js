const resumeObj = {
  professional: {
    info: "Professional Info",
    infoP: "Greetings"
  },
  workCircle: {
    title: "Work Experience",
    job1: {
      workTitle: "Freelance, Kyrenia, CYP — Frontend Web Developer",
      workYear: "July 2019 - PRESENT"
    }, 
    job2: {
      workTitle: "CENI, Kinshasa, DRC — Data Entry Operator",
      workYear: "November  2010 - December 2010"
    }
  },
  education: {
    title: "Education",
    bachelor: {
      university: "Girne American University, Kyrenia, Kyrenia, Northern Cyprus — Bsc. Computer Engineering",
      bachelorYear: "Sept.  2016 -  2020"
    },
    highSchool: {
      degree: "C.S Ngemba, Kinshasa, DRC — High School Diploma",
      degreeYear: "2001 -  2007"
    }
  },
  skills: {
    title: "Skills",
    skillsTitle: {
      python: "Python",
      javascript: "Javascript",
      css: "CSS",
      sql: "SQL",
      html: "Html5"
    }
  },
  languages: {
    title: "Languages",
    languageTitles: {
      french: "French - Fluently",
      lingala: "Lingala - Fluently",
      english: "English - Fluently"
    }
  }
};

const resumeData = `
  
	<div id="resume-ex">
    
    <p class="resumeList" id="resumeInfo">${resumeObj.professional.info}</p>
    <p>${resumeObj.professional.infoP}</p>
    

    
    <p class="resumeList" id="work-ex">${resumeObj.workCircle.title}</p>
    <div id="job1">
      <h4>${resumeObj.workCircle.job1.workTitle}</h3>
      <h5>${resumeObj.workCircle.job1.workYear}</h4>
      <h4>${resumeObj.workCircle.job2.workTitle}</h3>
      <h5>${resumeObj.workCircle.job2.workYear}</h4>
    </div>
    
    
    <p class="resumeList" id="education">${resumeObj.education.title}</p>
    <div id="all-education">
      <h4>${resumeObj.education.bachelor.university}</h4>
      <h5>${resumeObj.education.bachelor.bachelorYear}</h5>
      <h4>${resumeObj.education.highSchool.degree}</h4>
      <h5>${resumeObj.education.highSchool.degreeYear}</h5>
    </div>
    

    
  
  </div>

	<div id="skill-language">
    <div id="skills-here">
      <h4>${resumeObj.skills.title}</h4>
      <ul>
        <li>${resumeObj.skills.skillsTitle.python}</li>
        <li>${resumeObj.skills.skillsTitle.javascript}</li>
        <li>${resumeObj.skills.skillsTitle.css}</li>
        <li>${resumeObj.skills.skillsTitle.sql}</li>
        <li>${resumeObj.skills.skillsTitle.html}</li>
      </ul>
    </div>

    <div id="languages-here">
      <h4>${resumeObj.languages.title}</h4>
      <ul>
        <li>${resumeObj.languages.languageTitles.french}</li>
        <li>${resumeObj.languages.languageTitles.english}</li>
        <li>${resumeObj.languages.languageTitles.lingala}</li>
      </ul>
    </div>
	
	</div>


`
const resumeSection = document.createElement("div");
resumeSection.setAttribute("id", "resume-section");
resumeSection.classList.add("content-wrapper");
resumeSection.innerHTML = resumeData;

export default resumeSection;