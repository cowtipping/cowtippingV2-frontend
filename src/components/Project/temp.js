type ProjectProps = {
  projectTitle: string;
  description: string;
} & { children?: React.ReactNode };

/* The ProjectProps type defines the shape of the props that the Project component expects to receive. The & { children?: React.ReactNode } part adds a optional children prop of type React.ReactNode to the ProjectProps type. This allows the Project component to accept a children prop, while still maintaining the required projectTitle and description props. */

const Project: React.FC<ProjectProps> = ({ projectTitle, description, children }) => {
  return (
    <>
      <h4>{projectTitle}</h4>
      <p>{description}</p>
      {children}
    </>
  );
};

export default Project;
