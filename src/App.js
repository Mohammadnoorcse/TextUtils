// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom"

function App() { 


  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    },3000)
   
  }



  const [mode, setMode] = useState('light');
  const [switchText, setSwitchText] = useState("Enable DarkMode");
  let toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = "#042743";
      setSwitchText("Enable LightMode");
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";
      
      
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      setSwitchText("Enable DarkMode");
      showAlert("light Mode  has been enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  }
  return (
    <>
      <Router>
        <Navbar mode={mode} toggleMode={toggleMode} Text={switchText} />

        <Alert alert={alert} />
        {/* 
      <div className="container">
        <TextForm
          showAlert={showAlert}
          heading="Enter the text to analyze "
          mode={mode}
        />
      </div>
      <div className="container">
        <About />
      </div> */}

        <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/home">
            <TextForm
              showAlert={showAlert}
              heading="Enter the text to analyze "
              mode={mode}
            />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;