import Grid from "@mui/material/Grid";
import Tags from "../Tags";
import Project from "../Project";
import ProjectLink from "../ProjectLink";
import Screenshot from "../Screenshot";
import pokemon from "../../assets/images/pokemon-landscape-bw.png";
import ComputerIcon from "@mui/icons-material/Computer";
import GitHub from "@mui/icons-material/GitHub";
import Description from "../Description";
import genshin from "../../assets/images/genshin-landscape-bw.png";
import waste from "../../assets/images/nuclear-waste-landscape-bw.png";
import cowtipping from "../../assets/images/cowtipping-landscape-bw.png"

const ProjectContainer = () => {
  return (
    <>
      <h3>Projects</h3>
      <p>You can find out more about them by checking out the GitHub repos.</p>
      <Grid container spacing={3}>
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

        <Grid item xs={12} sm={12} md={6}>
          <div className="project">
            <Project projectTitle="Genshin Impact Fansite">
              <Screenshot
                screenshot={genshin}
                alt="Genshin Impact characters"
              />
              <div className="tags">
                <Tags tag="JavaScript" />
              </div>
              <Description description="It tells you which Genshin Impact characters have talent books available to farm today." />
              <div className="project-links">
                <ProjectLink
                  projectLink="https://cowtipping.co.uk/genshinbooks"
                  linkType="Live"
                  Icon={<ComputerIcon />}
                />
                <ProjectLink
                  projectLink="https://github.com/cowtipping/genshin-book-farm"
                  linkType="GitHub"
                  Icon={<GitHub />}
                />
              </div>
            </Project>
          </div>
        </Grid>

        <Grid item xs={12} sm={12} md={6}>
          <div className="project">
            <Project projectTitle="Portfolio">
              <Screenshot
                screenshot={cowtipping}
                alt="Adie Nunn's portfolio homepage"
              />
              <div className="tags">
                <Tags tag="React" />
                <Tags tag="TypeScript" />
                <Tags tag="Express" />
                <Tags tag="Node" />
                <Tags tag="MUI" />
              </div>
              <Description description="It's this site. The one you are on." />
              <div className="project-links">
                <ProjectLink
                  projectLink="https://cowtipping.co.uk/"
                  linkType="Live"
                  Icon={<ComputerIcon />}
                />
                <ProjectLink
                  projectLink="https://github.com/cowtipping/"
                  linkType="GitHub"
                  Icon={<GitHub />}
                />
              </div>
            </Project>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default ProjectContainer;
