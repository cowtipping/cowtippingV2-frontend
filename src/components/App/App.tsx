import ContactForm from "../ContactForm";
import Header from "../Header";
import ProjectContainer from "../ProjectContainer";
import Footer from "../Footer";
import About from "../About";
import Navbar from "../Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <div className="skew-1"></div>
      <ProjectContainer />
      <div className="skew-2"></div>
      <ContactForm />
      <Footer />
    </>
  );
}

export default App;
