import React from 'react';
import { Link, NavLink } from "react-router-dom";


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <a className="navbar-brand "style={{ color: '#FFF' }} href="#">
        <b>BreatheFlowin</b>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">

         {/* this is the home tab */}

          {/* <li className="nav-item  active">
          <li className="nav-item mr-3 active"> */}
            <a className="nav-link active" href="#">
              <Link to ="/home" style={{ color: '#FFF' }}>Home</Link>
            </a>
          {/* </li>
          </li> */}

      {/*  end of home tab */}

          {/* <li className="nav-item mr-3 active"> */}
            <a className="nav-link active" href="#">
              <Link to ="/learnrap" style={{ color: '#FFF' }}>Learn Rap</Link>
            </a>
          {/* </li> */}


          {/* <li className="nav-item mr-3 active"> */}
            <a className="nav-link" href="#">
              <Link to ="/gallery"style={{ color: '#FFF' }}>Gallery</Link>
            </a>
          {/* </li> */}


          {/* <li className="nav-item mr-3 active"> */}
            <a className="nav-link" href="#">
              <Link to ="/music"style={{ color: '#FFF' }}>Music</Link>
            </a>
          {/* </li> */}


          {/* <li className="nav-item mr-3 active"> */}
            {/* <a className="nav-link" href="#">
             <Link to ="/history" style={{ color: '#FFF' }}>History</Link>
            </a>  */}
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;