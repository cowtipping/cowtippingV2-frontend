import ContactForm from "../ContactForm";
import Header from "../Header";
import ProjectContainer from "../ProjectContainer";
import Footer from "../Footer";
import About from "../About";
import Navbar from "../Navbar";

function App() {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <header>
        <Header />
      </header>
      <section id="about">
        <About />
      </section>
      <div className="skew-1"></div>
      <main id="projects">
        <ProjectContainer />
      </main>
      <div className="skew-2"></div>
      <section id="contact">
        <ContactForm />
      </section>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
