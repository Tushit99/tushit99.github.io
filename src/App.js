import "./App.css";
import Header from "./components/About/About";
// import zee from "./components/Image/forest.jpg";
import Top from "./components/Home/Home";
import Skills from "./components/Skills/Skills";
import Github from "./components/Github/Github";
import { Contact } from "./components/Contacts/Contacts";

function App() {
  return (
    <div className="App">  
      <Top />
      <Header /> 
      <Skills />  
      <Github /> 
      <Contact />  
    </div>
  );
}

export default App;
