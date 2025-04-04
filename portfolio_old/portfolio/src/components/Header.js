import React from 'react'
import '../css/Header.css';
const Header = () => {
    return(
        <header class="header">
            <h1>My portfolio</h1>
           <nav class="icons">
            <a href="https://Wa.me/+917869461240"><i class="bi bi-whatsapp" id="whatsapp"></i></a>
           <a href="https://www.instagram.com/ali_huzef_867/"  id="instagram"><i class="bi bi-instagram"></i></a>
           <a href="https://www.linkedin.com/in/syed-huzef-ali-85622722a/" id="linkedin"><i class="bi bi-linkedin"></i></a>
           <a href="https://www.youtube.com/@syedhuzefali378/" id="youtube"><i class="bi bi-youtube"></i></a>
           <a href="https://www.facebook.com/syedhuzef.ali/"><i class="bi bi-facebook" id="facebook"></i></a>
                                                                 
           </nav>     
        </header>
        
    );
};
export default Header;
