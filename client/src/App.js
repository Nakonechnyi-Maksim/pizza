import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import NavBar from "./navBar";
import AppRouter from "./router/appRouter";
function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <AppRouter />
      </div>
    </Router>
  );
}

export default App;
