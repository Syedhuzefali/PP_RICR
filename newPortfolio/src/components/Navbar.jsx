import { navLink } from "react-router-dom";

const Navbar = () => {
    return(
        
        <navLink className="">
            <h1>My Portfolio</h1>
            
            <ul>
                <li><navLink to="/">Home</navLink></li>
                <li><navLink to="/About">About</navLink></li>
                <li><navLink to="/Experience">Experience</navLink></li>
                <li><navLink to="/Projects">Projects</navLink></li>
                <li><navLink to="/Contact">Contact</navLink></li>
                
            </ul>
        </nav>
    );
};

export default Navbar;