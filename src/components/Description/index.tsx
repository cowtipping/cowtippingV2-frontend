const Description = ({ description }: { description: string }) => {
  return (
    <>
      <p data-testid="project-description">{description}</p>
    </>
  );
};

export default Description;
