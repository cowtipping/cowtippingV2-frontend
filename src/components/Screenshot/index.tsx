type ScreenshotProps = {
  screenshot: string;
  alt: string;
};

const Screenshot: React.FC<ScreenshotProps> = ({ screenshot, alt }) => {
  return (
    <>
      <img src={screenshot} alt={alt} />
    </>
  );
};

export default Screenshot;
