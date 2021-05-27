const navigation = {
  title: "Yves Arthur",
  sousTitle: "Freelancer Front-End Developer",
  navTitle: {
    first: "HOME",
    second: "RESUME",
    third: "PROJECTS",
    last: "CONTACT"
  }

};

const nav = `
  <div id="navHeader" class="content-wrapper">
    <div id="navigation" class="navigation-list">
      <h1 class="title">${navigation.title}</h1>
      <h3 class="title">${navigation.sousTitle}</h3>
    </div>

    <ul id="navList" class="navigation-list">
      <li><a href="#">${navigation.navTitle.first}</a></li>
      <li><a href="#">${navigation.navTitle.second}</a></li>
      <li><a href="#">${navigation.navTitle.third}</a></li>
      <li><a href="#">${navigation.navTitle.last}</a></li>
    </ul>
  </div>



`
export default nav;