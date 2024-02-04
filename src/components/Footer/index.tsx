const currentDate = new Date();
const currentYear = currentDate.getFullYear();

const Footer = () => {
  return (
    <footer>
      <p>This site was made with React, TypeScript and formerly Node (until I deemed it unnecessary and binned it). Tests are done in Jest and Cypress.</p>
      <p>Have a nice day. ^_^</p>
      <p>(c) {currentYear} Adie Nunn</p>
    </footer>
  );
};

export default Footer;