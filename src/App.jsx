import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
// import { InputBox } from "./components/InputBox";
import { File, Tags, Annotations, About, Services } from "./components/pages";
// import s1 from './components/s1';
function App() {
  return (
    <div className="App">
      <hr />
      <Navbar />
      
      <hr />
      
      {/* <InputBox/> */}
      <Routes>
        <Route path="/About" element={<About />} />
        <Route path="/File" element={<File />} />
        <Route path="/services" element={<Services />} />
        <Route path="/Tags" element={<Tags />} />
        <Route path="/Annotations" element={<Annotations />} />
      </Routes>
    </div>
    
  );
}

export default App;