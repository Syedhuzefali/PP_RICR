import React from "react";
import "../css/Feedback.css";
import aditya from "../Images/aditya image.jpg";
import krishna from "../Images/krishna image.jpg";
import tanveer from "../Images/tanveer image.jpg";

const Feedback = () => {
  return (
    <body>
        <h1 align="center" id="feedback-heading">Feedback</h1>
    <div class="feedback-section">
      <div class="aditya-reviews">

        <img src={aditya} alt="aditya image" class="adiyta-image"></img>
        <h1>Aditya Feedback</h1>
        <p id="review">
          The header with social media icons is visually
          appealing and helps create a professional touch.
        </p>
      </div>
      <div class="krishna-reviews">
        <img src={krishna} alt="krishna image" class="krishna-image"></img>
        <h1>Krishna Feedback</h1>
        <p id="review">
          The left-hand navigation bar with clear sections like "Home," "About,"
          "Project," "Contact," and "Feedback" makes the structure easy to
          follow.
        </p>
      </div>
      <div class="tanveer-reviews">
        <img src={tanveer} alt="tanveer image" class="tanveer-image"></img>
        <h1>Tanveer Feedback</h1>
        <p id="review">
          The feedback section images seem to float without structured
          alignment. Adding padding or grid-based alignment might help in
          achieving a cleaner layout.
        </p>
      </div>
    </div>
    </body>
  );
};

export default Feedback;
