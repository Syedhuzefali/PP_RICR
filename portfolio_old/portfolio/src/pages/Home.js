import React from 'react'
import "../css/Home.css";
import Myimage from "../Images/My image.jpg";
const Home = () => {
    return(
      <body> 
        <div class="home-heading">
    <h1>Welcome.</h1>
    <p class="paragraph">
       Hello i am Huzef a programmer developed skills in front end developer,
       UI designer <br />
       I am passionate about cutting edge,pixel perfect,beautiful interfaces created in front end development.
    </p>
    <img src={Myimage} alt="" class="myimage"></img> 
    <p>Let’s build something amazing together! Check out my portfolio below or drop me a message—I'd love to hear from you.</p>
    <br />
    <a href="http://localhost:3000/Contact"><button id="contact-btn">Contact Me</button></a>
    
    
    </div>
    
      </body>
    );
};
export default Home;