import { useState } from "react";
import { SlMenu } from "react-icons/sl";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(true);

  const handleToggle = () => {
    setNavbarOpen((prev) => !prev);
  };

  /* TODO: fix this */
  /*  window.onscroll = function () {
    if (navbarOpen) {
      setNavbarOpen(false);
      console.log("scroll")
    }
  }; */

  /* {navbarOpen ? "Close" : "Open"} */

  return (
    <>
    <div className="navicon">
      <button onClick={handleToggle} className="toggle" id="menu" aria-label="menu">
        <SlMenu className="hamburger" />
      </button>
      </div>
      <ul className={`menuNav ${navbarOpen ? "showMenu" : ""}`}>
        <li>
          <a href="#home">home</a>
        </li>
        <li>
          <a href="#about">about</a>
        </li>
        <li>
          <a href="#projects">projects</a>
        </li>
        <li>
          <a href="#contact">contact</a>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
