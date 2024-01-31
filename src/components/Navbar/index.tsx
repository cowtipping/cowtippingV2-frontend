import { useState } from "react";
import { SlMenu } from "react-icons/sl";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(true);

  const handleToggle = () => {
    setNavbarOpen((prev) => !prev);
  };

  /* hide navbar on scroll */
  window.onscroll = function () {
    if (navbarOpen) {
      setNavbarOpen(false);
    }
    if (navbarOpen === false && document.documentElement.scrollTop === 0) {
      setNavbarOpen(true);
    }
  };

  return (
    <nav>
      <div className="navicon">
        <button
          onClick={handleToggle}
          className="toggle"
          id="menu"
          aria-label="menu"
        >
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
          <a href="https://blog.cowtipping.co.uk" target="_blank" rel="noopener noreferrer">blog</a>
        </li>
        <li>
          <a href="#contact">contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
