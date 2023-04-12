import { SiReact } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiNodedotjs } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { SiJest } from "react-icons/si";
import { SiCypress } from "react-icons/si";

const About = () => {
  return (
    <section id="about">
      <h3>About Me</h3>
      <p>
        I have a background in the arts but I've always had programming as a
        hobby. Discovering a fast-paced web development bootcamp was when I
        decided I needed a career change. It has been integral to my
        self-development as a team player working in the Agile Scrum
        methodology. With a natural curiosity for all things tech, I'm seeking
        further opportunities to work with others in this field.
        <br />
        When I'm not coding I like gaming, writing, going for long walks and
        wistfully staring at peoples' houseboats.
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
