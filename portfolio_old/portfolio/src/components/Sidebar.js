import React from 'react'

import '../css/Sidebar.css';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return(
        
          <div class="sidebar">
            <nav>
                <ul>
                    <li>
                     <NavLink to="/" exact activeClassName="active">
                    Home
                     </NavLink>
                    </li>
                    <li>
                    <NavLink to="/About" exact activeClassName="active">
                    About
                     </NavLink> 
                    </li>
                    <li>
                    <NavLink to="/Project" exact activeClassName="active">
                    Project
                     </NavLink>
                    </li>
                    <li>
                    <NavLink to="/Contact" exact activeClassName="active">
                    Contact
                     </NavLink>
                    </li>
                    <li>
                    <NavLink to="/Feedback" exact activeClassName="active">
                    Feedback
                     </NavLink>
                    </li>
                    
                </ul>
                
            </nav>
          </div>
    );
};
export default Sidebar;