import "./App.css";
import Navbar from "./Components/Navbar";
import MainContent from "./Components/MainContent";
import About from "./Components/About";
import SpeedTest from "./Components/SpeedTest";
import NotFound from "./Components/NotFound";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "rgb(38 42 46)";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <Router>
      <div className="App">
        <Navbar mode={mode} toggleMode={toggleMode} />
        <Routes>
          <Route exact path="/" caseSensitive={false} element={<MainContent mode={mode} />} />
          <Route exact path="speedTest" caseSensitive={false} element={<SpeedTest mode={mode} />} />
          <Route exact path="about" caseSensitive={false} element={<About mode={mode} />} />
          <Route path="*" element={<NotFound/>}/>
          </Routes>
      </div>
    </Router>
  );
}

export default App;
