import adie from "../../assets/images/adie-pen-ward-cropped.png";
import blob from "../../assets/images/curveNegative.svg";
import { SiGithub } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";

const Header = () => {
  return (
    <header>
      <div className="intro">
        <img src={adie} alt="Adie Nunn" />
        <h1>Adie Nunn</h1>
        <h2>Software engineer.</h2>
        <div className="social-icons">
          <a href="https://github.com/cowtipping" aria-label="GitHub">
            <SiGithub />
          </a>
          <a href="https://www.linkedin.com/in/adienunn/" aria-label="LinkedIn">
            <SiLinkedin />
          </a>
        </div>
      </div>

      <div className="blob">
        <img src={blob} alt="blob" />
      </div>
    </header>
  );
};

export default Header;
