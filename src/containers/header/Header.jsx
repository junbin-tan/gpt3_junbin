import React from "react";
import "./header.css";
import peeps from "../../assets/people.png";
import ai from "../../assets/ai.png";

const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">What is GPT-3</h1>
        <p>
          GPT-3, short for Generative Pre-trained Transformer 3, is the third
          iteration of OpenAI's groundbreaking language model. Building upon the
          success of its predecessors, GPT-3 represents a significant leap
          forward in natural language processing capabilities.{" "}
        </p>

        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Your email address" />
          <button type="button">Get Started</button>
        </div>

        <div className="gpt3__header-content__people">
          <img src={peeps} alt="people" />
          <p>1,500 people are currently using GPT-3</p>
        </div>
      </div>

      <div className="gpt3__header-image">
        <img src={ai} />
      </div>
    </div>
  );
};

export default Header;
