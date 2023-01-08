import "./App.css";
import Header from "./components/About/About"; 
import Top from "./components/Home/Home";
import Skills from "./components/Skills/Skills";
import Github from "./components/Github/Github";
import { Contact } from "./components/Contacts/Contacts";
import Navbar from "./components/Navbar/Navbar";
import Project from "./components/Project/Project";

function App() {
  return (
    <div className="App">  
      <div className="navbox">
        <Navbar /> 
      </div>
      <Top />
      <Header /> 
      <Skills />  
      <Github /> 
      <Project />
      <Contact />  
    </div>
  );
}

export default App;
