import React from "react";
import "../css/Project.css";
import ludoimage from "../Images/ludo image.webp";
import guessNumber from "../Images/guess the number image.png";
import tipcalc from "../Images/tip calc image.webp";
import starRating from "../Images/star rating image.png";

const Project = () => {
  return (
    <div class="intro">
      <h1 align="center">MY PROJECTS</h1>
      <p>
        I have done various projects in the journey of MERN stack development
      </p>
      <div class="projects">
        <img src={ludoimage} alt="" class="ludoimage"></img>
      <a href=" https://syedhuzefali.github.io/Portfolio-projects/LUDO/" alt="click here to enter"><button id="click">click</button></a>
        <h4>Ludo Game</h4>
        <p>
          <h3>Technology used:-</h3>The technology is simply used in ludo game
          with the help of html,css,javascript to create a simple ludo game in
          html div tag is used to divide the section of each and every
          individual content .in css desgn each and every element and in
          javascript if else statement is used to response which player chance
          first in the game who won or loss.
        </p>
        <img src={guessNumber} alt="" class="guessNumber"></img>
        <a href="https://syedhuzefali.github.io/Portfolio-projects/NUMBER GUESSING/" alt="click here to enter"><button id="click">click</button></a>
        <h4>Guess the Number</h4>
        <p>
          <h3>Technology Used:-</h3>It is done by front end technology where in
          javascript math.floor(math.random) library is used to response the
          project we can guess between(0-100)numbers and if the number guess it
          shows the message "The number entered is greater than the original
          number".{" "}
        </p>
        <img src={tipcalc} alt="" class="tipcalc"></img>
        <a href="https://syedhuzefali.github.io/Portfolio-projects/TIP CALCULATOR" alt=""><button id="click">click</button></a>
        <h4>Tip Calculator</h4>
        <p>
          <h3>
            Technology Used:-in this project tip calculator is created using
            html/css/js A tip calculator is a tool that calculates the tip
            amount for a service based on a percentage of the total cost.
          </h3>
        </p>
        <img src={starRating} alt="" class="starRating"></img>
        <a href="https://syedhuzefali.github.io/Portfolio-projects/star rating" alt=""><button id="click">click</button></a>
        <h4>Star rating</h4>
        <p>
          <h3>Technology Used:-</h3>this is also a front end technology in this
          project In a 1 to 5 star rating survey, respondents are presented with
          5 star surveys in which they are asked to rate a product, service, or
          experience using a star rating system, where 5 stars represent
          excellent or positive feedback, and 1 star indicates poor or negative
          feedback.
        </p>
      </div>
    </div>
  );
};
export default Project;
