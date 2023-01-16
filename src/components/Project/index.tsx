type ProjectProps = {
  projectTitle: string;
} & { children?: React.ReactNode };

/* The ProjectProps type defines the shape of the props that the Project component expects to receive. The & { children?: React.ReactNode } part adds a optional children prop of type React.ReactNode to the ProjectProps type. This allows the Project component to accept a children prop, while still maintaining the required projectTitle and description props. */

const Project: React.FC<ProjectProps> = ({ projectTitle, children }) => {
  return (
    <>
    <h5 className="project-title">{projectTitle}</h5>
      {children}
    </>
  );
};

export default Project;