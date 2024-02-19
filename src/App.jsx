import Header from "./components/Header";
import "./App.css";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Work from "./components/Work";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <section className="wrapper">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <Projects />
        <Work />
        <Skills />
        <Footer />
      </section>
    </div>
  );
}

export default App;
