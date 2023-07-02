import "./App.scss";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Hero from "./components/hero/Hero";
import ScrollButton from "./components/scrollButton/ScrollButton";
import Services from "./components/services/Services";
import Team from "./components/team/Team";
import Header from "./components/topBar/Header";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="sections">
        <Hero />
        <About />
        <Services />
        <Team />
        <Contact />
      </div>
      <ScrollButton />
    </div>
  );
}

export default App;
