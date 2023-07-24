import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/LandingPage/Navbar";
import Footer from "./Components/LandingPage/footer";
import LandingPage from "./Components/LandingPage/main";
import SkillsComponent from "./Components/Skills/Main"
import ExperienceComponent from "./Components/Experience/main";
import ProjectComponent from "./Components/Projects.jsx/Project";
import ContactComponent from "./Components/Contact_Us/contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/skills" element={<SkillsComponent />} />
        <Route path="/experience" element={<ExperienceComponent />} />
        <Route path="/projects" element={<ProjectComponent />} />
        <Route path="/contact" element={<ContactComponent />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
