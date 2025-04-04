import React from 'react'
import "../css/Contact.css";
const Contact = () => {
    return(
     <body>
      <div class="contact-details">
      <h1 id="detail">Contact details</h1>
        <h1>Name</h1>
        Syed Huzef Ali
      <h1>Phone</h1>
      <span>786-946-1240</span>

      <h1>Address</h1>
      <span>Govindpura BHEL bhopal pincode 462023 MP,INDIA</span>
      <h1>Email Address</h1>
      <span><a href="mailto:alihuzef2002@gmail.com">Send me an email</a><i class="bi bi-envelope-at-fill"></i></span>
      <h1>Whatsapp</h1>
      <span><a href="https://Wa.me/+917869461240"><i class="bi bi-whatsapp" id="whatsapp">Whatsapp</i></a></span>
      <h1>LinkedIn</h1>
      <span> <a href="https://www.linkedin.com/in/syed-huzef-ali-85622722a/" id="linkedin"><i class="bi bi-linkedin">LinkedIn</i></a></span>
      <h1>Github</h1>
      <span><a href="https://github.com/Syedhuzefali/Portfolio-projects"><i class="bi bi-github"></i>Github</a></span>
      <h1>Instragram</h1>
      <span> <a href="https://www.instagram.com/ali_huzef_867/"  id="instagram"><i class="bi bi-instagram"></i>Instagram</a></span>
      <h1>Facebook</h1>
      <span><a href="https://www.facebook.com/syedhuzef.ali/"><i class="bi bi-facebook" id="facebook"></i>Facebook</a></span>
      <h1>Youtube</h1>
      <span><a href="https://www.youtube.com/@syedhuzefali378/" id="youtube"><i class="bi bi-youtube"></i>Youtube</a></span>
      <a href="http://localhost:3000/"><button class="return-btn">return back</button></a>  
      </div>
     </body>
    );
};
export default Contact;