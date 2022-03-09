const footerObj = {
  phone: "+905488331446",
  twitter: "Twitter",
  facebook: "Facebook",
  email: "kapayastudio@protonmail.com",
  emailMe: "Send Email",
  made: "&copy 2022 by Yves Arthur"

};

const footerHere = `
  <div class="content-wrapper">
    <ul id="footer-list">
      <li class="footer-list">
        <i class="fas fa-phone"> ${footerObj.phone}</i>
      </li>
      <li class="footer-list">
        <i class="fab fa-twitter"><a href="https://twitter.com/home"> ${footerObj.twitter}</a></i>
      </li>
      <li class="footer-list">
        <i class="fab fa-facebook">
          <a href="https://www.facebook.com/kisshotacerolaorionheartunderb">
            ${footerObj.facebook}</i>
          </a>
      </li>
      <li class="footer-list">
        <i class="fas fa-envelope-open-text"><a href="mailto:${footerObj.email}"> ${footerObj.emailMe}</a></i>
      </li>
    </ul>
    
    <div id="made-by"> ${footerObj.made}
      <a href="https://www.linkedin.com/in/yvesarthur/">
        <i class="fab fa-linkedin"></i>
      </a>
    </div>
  </div>

`
// Creation of the footer
const footer = document.createElement("footer");
footer.innerHTML = footerHere;

export default footer;