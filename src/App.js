import { useRef } from "react";
import "./App.css";
import About from "./components/About/About";
import { Contact } from "./components/Contacts/Contacts";
import Github from "./components/Github/Github";
import Home from "./components/Home/Home";
import Project from "./components/Project/Project";
import Skills from "./components/Skills/Skills";
import Navbar from "./Pages/Navbar/Navbar";
import Navdetail from "./Pages/Navbar/Navdetail";

function App() { 
  let home = useRef();
  let about = useRef();
  let skill = useRef();
  let contact = useRef();
  let project = useRef(); 

  return (
    <div className="App">
      <div className="container"></div>
      <Navbar />
      <Navdetail home={home} about={about} skill={skill} contact={contact} project={project} />
      <Home home={home} />
      <About about={about} /> 
      <Skills skill={skill} /> 
      <Github />  
      <Project project={project} /> 
      <Contact contact={contact} /> 
    </div>
  );
}

export default App;
