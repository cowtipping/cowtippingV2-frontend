import ContactForm from "../ContactForm";
import Header from "../Header";
import Nav from "../Nav";
import ProjectContainer from "../ProjectContainer";
import Footer from "../Footer";
import About from "../About";

function App() {
  return (
    <>
      <nav>
        <Nav />
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
