type ProjectLinkProps = {
  projectLink: string;
  linkType: string;
  Icon: any;
};

const ProjectLink: React.FC<ProjectLinkProps> = ({
  projectLink,
  linkType,
  Icon,
}) => {
  return (
    <>
      <a
        href={projectLink}
        className="link-to-project"
        target="_blank"
        rel="noreferrer"
      >
        <span className="live-link">{linkType}</span> {Icon}
      </a>
    </>
  );
};

export default ProjectLink;
