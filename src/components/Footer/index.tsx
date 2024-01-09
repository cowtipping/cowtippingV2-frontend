const currentDate = new Date();
const currentYear = currentDate.getFullYear();

const Footer = () => {
  return (
    <footer>
      <p>Have a nice day.</p>
      <p>(c) {currentYear} Adie Nunn</p>
    </footer>
  );
};

export default Footer;