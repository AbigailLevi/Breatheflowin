import React from "react";
import "./Kendrick.css";
import Navbar from "./Navbar.js";
// import React, { useState } from "react";
import { Link } from "react-router-dom";

const Kendrick = () => {
  return (
    <div className="kendrick-bg">
      <Navbar />
      <div className="ken">Rhythm and flow of rapping.</div>
      <p className="kend">
        Rapping brings the inner you out to express your feeling and emotions.
        It comes out with flow, <br />
        rhythm and style, the feeling of flowing words coming out Powerful!
      </p>
      <div className="kendb">
        <a href="#" className="btn kenb btn-outline-light">
          <Link to="/home">Lets Flow!</Link>
          <span className="sr-only">(current)</span>
        </a>
      </div>
    </div>
  );
};

export default Kendrick;
