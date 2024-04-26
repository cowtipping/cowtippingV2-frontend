import Grid from "@mui/material/Grid";
import Tags from "../Tags";
import Project from "../Project";
import ProjectLink from "../ProjectLink";
import Screenshot from "../Screenshot";
import pokemon from "../../assets/images/pokemon-landscape-bw.png";
import ComputerIcon from "@mui/icons-material/Computer";
import GitHub from "@mui/icons-material/GitHub";
import Description from "../Description";
import waste from "../../assets/images/nuclear-waste-landscape-bw.png";
import letchat from "../../assets/images/letchat-landscape-bw.png";

const ProjectContainer = () => {
  return (
    <main id="projects">
      <h3>Projects</h3>
      <p>You can find out more about them by checking out the GitHub repos.</p>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={6}>
          <div className="project">
            <Project projectTitle="LetChat">
              <Screenshot screenshot={letchat} alt="LetChat homepage" />
              <div className="tags" data-testid="project-tags">
                <Tags tag="Next.JS" />
                <Tags tag="TypeScript" />
                <Tags tag="Firebase" />
                <Tags tag="Tailwind" />
                <Tags tag="Express" />
              </div>
              <Description description="Final 4-week project for School Of Code, cohort 13. Streamlined communication between landlords and tenants." />
              <div className="project-links">
                <ProjectLink
                  projectLink="https://github.com/cowtipping/Git-Gud-LetChat-Frontend"
                  linkType="GitHub"
                  Icon={<GitHub />}
                />
              </div>
            </Project>
          </div>
        </Grid>

        <Grid item xs={12} sm={12} md={6}>
          <div className="project">
            <Project projectTitle="Click The Nuclear Waste">
              <Screenshot
                screenshot={waste}
                alt="A lovely barrel of nuclear waste"
              />
              <div className="tags">
                <Tags tag="React" />
              </div>
              <Description description="A Cookie Clicker clone." />
              <div className="project-links">
                <ProjectLink
                  projectLink="https://cowtipping.co.uk/clickwaste/"
                  linkType="Live"
                  Icon={<ComputerIcon />}
                />
                <ProjectLink
                  projectLink="https://github.com/cowtipping/clicker"
                  linkType="GitHub"
                  Icon={<GitHub />}
                />
              </div>
            </Project>
          </div>
        </Grid>

        <Grid item xs={12} sm={12} md={6}>
          <div className="project">
            <Project projectTitle="Who's That Pokemon?">
              <Screenshot screenshot={pokemon} alt="Who's That Pokemon?" />
              <div className="tags">
                <Tags tag="JavaScript" />
              </div>
              <Description description="Quiz game using the unofficial Pokemon API." />
              <div className="project-links">
                <ProjectLink
                  projectLink="https://cowtipping.co.uk/whothatpoke"
                  linkType="Live"
                  Icon={<ComputerIcon />}
                />
                <ProjectLink
                  projectLink="https://github.com/cowtipping/whos-that-pokemon"
                  linkType="GitHub"
                  Icon={<GitHub />}
                />
              </div>
            </Project>
          </div>
        </Grid>

      </Grid>
    </main>
  );
};

export default ProjectContainer;
