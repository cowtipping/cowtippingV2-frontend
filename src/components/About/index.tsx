import { SiReact } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiNodedotjs } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { SiJest } from "react-icons/si";
import { SiCypress } from "react-icons/si";
import { SiPython } from "react-icons/si";

const About = () => {
  return (
    <section id="about">
      <h3>About Me</h3>
      <p>
        I come from an arts background but, in a shocking plot twist, switched careers in 2023. I'm now a full-time, full-stack web developer. Hooray! On this website, you'll find a showcase of some of my increasingly 'vintage' projects that I've lovingly preserved for nostalgia's sake. My current obsession in my spare time is AI/ML/LLMs (alphabet soup is my favourite dish), as well as exploring the intersection of tech and the arts.
        <br />
        When I'm not coding I like gaming, writing, going for long walks and wistfully staring at peoples' houseboats.
      </p>
      <p>
        <a href="http://blog.cowtipping.co.uk" target="_blank" rel="noopener noreferrer">Check out my blog.</a>
      </p>
      <h3>My Main Tech Stack</h3>
      <ul>
        <li data-testid="node-icon">
          <SiNodedotjs />
          <span>Node.js</span>
        </li>
        <li data-testid="express-icon">
          <SiExpress />
          <span>Express.js</span>
        </li>
        <li data-testid="react-icon">
          <SiReact />
          <span>React</span>
        </li>
        <li data-testid="postgres-icon">
          <SiPostgresql />
          <span>Postgres</span>
        </li>
        <li data-testid="typescript-icon">
          <SiTypescript />
          <span>TypeScript</span>
        </li>
        <li data-testid="next-icon">
          <SiNextdotjs />
          <span>Next.js</span>
        </li>
        <li data-testid="python-icon">
          <SiPython />
          <span>Python</span>
        </li>
        <li data-testid="jest-icon">
          <SiJest />
          <span>Jest</span>
        </li>
        <li data-testid="cypress-icon">
          <SiCypress />
          <span>Cypress</span>
        </li>
      </ul>
    </section>
  );
};

export default About;
