import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Project from "./pages/Project";
import Feedback from "./pages/Feedback";
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  return (
    <Router>
      <div class="App">
        <Header />
        <Sidebar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Project" element={<Project />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Feedback" element={<Feedback />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
export default App;

