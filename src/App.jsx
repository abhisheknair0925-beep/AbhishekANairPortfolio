import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import SystemImpact from "./sections/SystemImpact";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import GithubActivity from "./sections/GithubActivity";
import Optimization from "./sections/Optimization";
import SystemArchitecture from "./sections/SystemArchitecture";
import Leadership from "./sections/Leadership";
import Projects from "./sections/Projects";
import Achievements from "./sections/Achievements";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-[#0F172A] min-h-screen text-slate-100 font-sans selection:bg-indigo-500/30 selection:text-indigo-200">
      <Navbar />
      <main>
        <Hero />
        <SystemImpact />
        <About />
        <Skills />
        <Experience />
        <GithubActivity />
        <Optimization />
        <SystemArchitecture />
        <Leadership />
        <Projects />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
