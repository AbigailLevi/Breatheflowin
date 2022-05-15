import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faCompass, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footertitle">Breathe Flowin!</div>

      <div className="footerlinks">
        <button className="linkdin">
          <FontAwesomeIcon icon={faEnvelope} />
        </button>
        <button className="linkdin">
          <FontAwesomeIcon icon={faLinkedin} />
          <a href="https://www.linkedin.com/in/abigail-fils-aime-696a90211/"></a>
        </button>
        <button className="linkdin">
          <FontAwesomeIcon icon={faGithub} />
        </button>
        <div className="footerinfo">
          Filsaimeam@gmail.com 786-564-8843 Abigail.Fils-Aime
        </div>
        <div className="footerdescript">
          Hello, thank you for visiting my website called "Breathe Flowin!" This
          is one of my favorite portfolio because of well I did on creating this
          website while having the basic techniques, such as HTML, CSS,
          JavaScript, Bootstrap, and React. Thank you!
        </div>
      </div>
    </footer>
  );
};

export default Footer;
