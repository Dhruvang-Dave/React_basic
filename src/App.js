import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import About from "./components/About";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); // whether darkk mode is eenabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#041222";
      showAlert("Dark mode is now enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode is now enabled", "success");
    }
  };

  return (
    <>
      <Router>
      <Navbar title="RectifyText" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
            <Routes>
            <Route path="/" element={<TextForm heading="Enter the text to analyze" showAlert={showAlert}  mode={mode}/>} />
            <Route path="About/*" element={<About />} />
          </Routes>
          {/* React Router v5 */}
              {/* <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/">
                <TextForm heading="Enter the text to analyze"/>
              </Route>
            </Switch> */}
        </div>
      </Router>
    </>
  );
}

export default App;