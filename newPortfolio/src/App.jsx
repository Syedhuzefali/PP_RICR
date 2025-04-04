import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";


function App() {
    return(
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/About" element={<About />} />
                <Route path="/Experience" element={<Experience />} />
                <Route path="/Projects" element={<Projects />} />
                <Route path="/Contact" element={<Contact />} />
            </Routes>
            <Footer/>
        </Router>
    );}

export default App;
