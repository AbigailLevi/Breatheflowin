import React from "react";
import "./Learnrap.css";
import Navbar from "./Navbar.js";
import Footer from "./Footer.js";
import { Link } from "react-router-dom";

const Learnrap = () => {
  return (
    <div className="learnrap-bg">
      <Navbar />
      <div className="learnrt">Learn how to rap</div>
      <p className="learnrp">
        This is where the foundation of rapping comes from. To learn how to rap
        is not about how fast the words can come out of your mouth, but on how
        you use rapping with different beats, no beats, the speed, the tempo
        ,the style, the flow, the rythm, and so much more! Below are a section
        of videos to watch based on learning how to rap.
      </p>
      <div className="row row-cols-2 row-cols-md-4 g-1">
        <div className="col">
          <div className="card ">
            <img
              src="https://thumbs.dreamstime.com/b/black-white-rapping-hand-written-word-text-typography-logo-icon-design-iocn-color-can-be-used-branding-card-147084124.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title oneLr">
                How To Start Rapping In 10 Easy Steps [How To Rap For Beginners]
              </h5>
              <p className="card-text">
              How To Start Rapping In 10 Easy Steps [How To Rap For Beginners]
              </p>
              <button className="buttonlr">
                <a href="https://www.youtube.com/watch?v=c6-hr6TaIUM" target="_blank">
                  We out!
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card ">
            <img
              src="https://thumbs.dreamstime.com/b/black-white-rapping-hand-written-word-text-typography-logo-icon-design-iocn-color-can-be-used-branding-card-147084124.jpg"
              class="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <p className="card-text">
              How To Freestyle Rap Better In 5 Simple Steps (For Beginners)
              </p>
              <button className="buttonlr">
                <a href="https://www.youtube.com/watch?v=a6yERXSutHs" target="_blank">
                  We out!
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card ">
            <img
              src="https://thumbs.dreamstime.com/b/black-white-rapping-hand-written-word-text-typography-logo-icon-design-iocn-color-can-be-used-branding-card-147084124.jpg"
              class="card-img-top"
              alt="..."
            />
            <div className="card-body ">
              <p className="card-text">
              7 Rap Flow Secrets That Show You How To Rap Better!
              </p>
              <button className="buttonlr">
                <a href="https://www.youtube.com/watch?v=3FweUtu6YHQ" target="_blank">
                  We out!
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card ">
            <img
              src="https://thumbs.dreamstime.com/b/black-white-rapping-hand-written-word-text-typography-logo-icon-design-iocn-color-can-be-used-branding-card-147084124.jpg"
              class="card-img-top"
              alt="..."
            />
            <div className="card-body ">
             
              <p className="card-text">
              How To FREESTYLE RAP For BEGINNERS: 3 Quick Tips For Daily
                Practice
              </p>
              <button className="buttonlr">
                <a href="https://www.youtube.com/watch?v=beTTgaVFXd8" target="_blank">
                  We out!
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Learnrap;
