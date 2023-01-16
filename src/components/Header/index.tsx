import adie from "../../assets/images/adie-pen-ward-cropped.png";
import blob from "../../assets/images/curveNegative.svg"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { SiGithub } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";

const Header = () => {
  return (
    <>
      <div className="intro">
        <img src={adie} alt="Adie Nunn" />
        <h1>Adie Nunn</h1>
        <h2>Full-stack web developer.</h2>
        <a href="https://github.com/cowtipping"><SiGithub /></a>
        <a href="https://www.linkedin.com/in/adienunn/"><SiLinkedin /></a>
      </div>

      <div className="blob">
        <img src={blob} alt="Waves" />
      </div>
    </>
  );
};

export default Header;
