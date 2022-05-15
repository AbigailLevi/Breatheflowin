import React from "react";
import Footer from "./Footer.js";
import "./Music.css";
import Navbar from "./Navbar.js";
import { Link } from "react-router-dom";

const Music = () => {
  return (
    <div className="music-bg">
      <Navbar />
      <div className="titilem">Music</div>
      <div className="seven-eight-title">70s - 80s music era</div>
      <div className="container">
        <div className="row">
          <div class="col" style={{ width: "10rem" }}>
            <img
              src="https://upload.wikimedia.org/wikipedia/en/f/fd/Grandmaster_Flash_-_The_Source.png" 
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <p class="card-text">
                The Grandmaster Flash 
              </p>
              <button className="musicbutton">
                <a href="https://www.youtube.com/watch?v=PobrSpMwKk4" target="_blank">
                  Let Me Hear It!
                </a>
              </button>
            </div>
          </div>
          <div className="col" style={{ width: "10rem" }}>
            <img
              src="https://img.discogs.com/nep0vZmQyd3SL2lFk8VvAdj9cD0=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-2355992-1279218318.jpeg.jpg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <p class="card-text">
               Rappers Delight
              </p>
              <button className="musicbutton">
                <a href="https://www.youtube.com/watch?v=mcCK99wHrk0" target="_blank">
                  Let Me Hear It!
                </a>
              </button>
            </div>
          </div>
          <div className="col" style={{ width: "10rem" }}>
            <img
              src="http://3.bp.blogspot.com/-oLhirbJ_zXw/Vq56ccNu_6I/AAAAAAAAE5g/jMauAzS9JsE/s1600/20121204-kurtis-x306-1354659351.jpg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <p class="card-text">
               Kurtis Blow
              </p>
              <button className="musicbutton">
                <a href="https://www.youtube.com/watch?v=heXlCbrVzcc" target="_blank">
                  Let Me Hear It!
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* this is the 80s - 90s */}

      <div className="seven-eight-title">80s - 90s music era</div>
      <div className="container">
        <div className="row">
          <div class="col" style={{ width: "10rem" }}>
            <img
              src="https://upload.wikimedia.org/wikipedia/en/1/1b/Planet_Rock_The_Album.jpg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <p class="card-text">
                Afrika Bambaataa
              </p>
              <button className="musicbutton">
                <a href="https://www.youtube.com/watch?v=9J3lwZjHenA" target="_blank">
                  Let Me Hear It!
                </a>
              </button>
            </div>
          </div>
          <div className="col" style={{ width: "10rem" }}>
            <img
              src="https://m.media-amazon.com/images/I/71WC20AreVL._SS500_.jpg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <p class="card-text">
               Public Enemy
              </p>
              <button className="musicbutton">
                <a href="https://www.youtube.com/watch?v=mmo3HFa2vjg" target="_blank">
                  Let Me Hear It!
                </a>
              </button>
            </div>
          </div>
          <div className="col" style={{ width: "10rem" }}>
            <img
              src="https://m.media-amazon.com/images/I/716Zom3q4lL._SS500_.jpg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <p class="card-text">
                KRS One
              </p>
              <button className="musicbutton">
                <a href="https://www.youtube.com/watch?v=jxyYP_bS_6s" target="_blank">
                  Let Me Hear It!
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* this is the 90s -2000s */}

      <div className="seven-eight-title">90s - 2000s music era</div>
      <div className="container">
        <div className="row">
          <div class="col" style={{ width: "10rem" }}>
            <img
              src="https://arcticreviewsblog.files.wordpress.com/2021/01/cube.jpg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <p class="card-text">
                Ice Cube
              </p>
              <button className="musicbutton">
                <a href="https://www.youtube.com/watch?v=h4UqMyldS7Q" target="_blank">
                  Let Me Hear It!
                </a>
              </button>
            </div>
          </div>
          <div className="col" style={{ width: "10rem" }}>
            <img
              src="https://images-na.ssl-images-amazon.com/images/I/51dF7WWgvtL._SY445_SX342_QL70_ML2_.jpg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <p class="card-text">
                2Pac 
              </p>
              <button className="musicbutton">
                <a href="https://www.youtube.com/watch?v=XW--IGAfeas" target="_blank">
                  Let Me Hear It!
                </a>
              </button>
            </div>
          </div>
          <div className="col" style={{ width: "10rem" }}>
            <img
              src="https://upload.wikimedia.org/wikipedia/en/9/91/Warren-g-rftr.jpg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <p class="card-text">
               Warren G
              </p>
              <button className="musicbutton">
                <a href="https://www.youtube.com/watch?v=1plPyJdXKIY" target="_blank">
                  Let Me Hear It!
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* this is 2000s-2010s */}

      <div className="seven-eight-title">2000s - 2010s music era</div>
      <div className="container">
        <div className="row">
          <div class="col" style={{ width: "10rem" }}>
            <img
              src="https://images.eil.com/large_image/NELLY_HOT%2BIN%2BHERRE-401777.jpg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <p class="card-text">
               Nelly
              </p>
              <button className="musicbutton">
                <a href="https://www.youtube.com/watch?v=RtSDWq6HsJE" target="_blank">
                  Let Me Hear It!
                </a>
              </button>
            </div>
          </div>
          <div className="col" style={{ width: "10rem" }}>
            <img
              src="https://i.discogs.com/qNDHmR7YVrhh45hMgeC9GBXvvovCTBKxtBxXvm38i64/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEyNjMw/ODMtMTQ5NDU5ODky/NS04NzI2LmpwZWc.jpeg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <p class="card-text">
               Solja Boy
              </p>
              <button className="musicbutton">
                <a href="https://www.youtube.com/watch?v=8UFIYGkROII" target="_blank">
                  Let Me Hear It!
                </a>
              </button>
            </div>
          </div>
          <div className="col" style={{ width: "10rem" }}>
            <img
              src="http://tracksfree.com/images/38/lil-wayne-feat-bobby-valentino--kidd-kidd-mrs-officer.jpg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <p class="card-text">
               Lil Wayne
              </p>
              <button className="musicbutton">
                <a href="https://www.youtube.com/watch?v=sBDqRrmPcYc" target="_blank">
                  Let Me Hear It!
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* this is 2010s-presents */}

      <div className="seven-eight-title">2010s - Present music era</div>
      <div className="container">
        <div className="row">
          <div class="col" style={{ width: "10rem" }}>
            <img
              src="https://images.squarespace-cdn.com/content/v1/5c16ac6350a54f728a2a9fd7/1589497610272-VCJLYV8V8SUL4DV0V8CQ/EWlfAKxX0AEZ1l9.jpg?format=1500w"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <p class="card-text">
                Lil Durk 
              </p>
              <button className="musicbutton">
                <a href="https://www.youtube.com/watch?v=_q6go0G49A0" target="_blank">
                  Let Me Hear It!
                </a>
              </button>
            </div>
          </div>
          <div className="col" style={{ width: "10rem" }}>
            <img
              src="https://pyxis.nymag.com/v1/imgs/ac5/3ee/c95628bc15f89a18e54d474e59abb726f6-26-Cardi-B-Invasion-of-Privacy.rsquare.w330.jpg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <p class="card-text">
                Cardi B
              </p>
              <button className="musicbutton">
                <a href="https://www.youtube.com/watch?v=PEGccV-NOm8" target="_blank">
                  Let Me Hear It!
                </a>
              </button>
            </div>
          </div>
          <div className="col" style={{ width: "10rem" }}>
            <img
              src="https://preview.redd.it/xhgnu854ytw41.jpg?auto=webp&s=5542da833e7f28b5369ed2ed33afb96be928b76e"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <p class="card-text">
                Lil Uzi Vert
              </p>
              <button className="musicbutton">
                <a href="https://www.youtube.com/watch?v=yF20KOqJg4E" target="_blank">
                  Let Me Hear It!
                </a>
              </button>
            </div>
          </div>
        </div>
      </div> 
      < Footer/>
    </div>
  );
};

export default Music;
