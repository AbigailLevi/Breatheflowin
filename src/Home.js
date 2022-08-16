import React from "react";
import Navbar from "./Navbar.js";
import "./Home.css";
import Footer from "./Footer.js";

const Home = () => {
  return (
    <html className="home-bg">
      <Navbar />

      {/* Make the breath flowin title cooler */}
      <div className="BF">Breathe Flowin</div>
      {/* title */}

      <div className="jumbotron">
        <div className="container"></div>
      </div>

      {/* <nav className="navbar navbar-expand-lg navvv navbar-dark">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link active" href="#">
              Home <span className="sr-only">(current)</span>
            </a>
            <a className="nav-item nav-link" href="#">
              Features
            </a>
            <a className="nav-item nav-link" href="#">
              Pricing
            </a>
            <a
              className="nav-item nav-link disabled"
              href="#"
              tabindex="-1"
              aria-disabled="true"
            >
              Disabled
            </a>
          </div>
        </div>
      </nav> */}

      <div className="titleT">Flowing begins within </div>

      <div className="row examplerap">
        <div className="col-sm-6">
          <div className="card er1">
            <div className="card-body er2">
              <img
                src="https://f4.bcbits.com/img/0008158198_0"
                style={{ height: "375px" }}
                style={{ width: "100%" }}
                alt="The look of Intelligence"
              />
            </div>
          </div>
        </div>
        <div className="col-sm-6 eor">
          <div className="card er3">
            Example of rap
            <div className="card-body er4">
              "Another black man shot down in these <br />
              streets, not by the cop, but by another <br />
              brother hatin. Took his brother life <br />
              for dub in his pocket, didnt think twice <br />
              used his gun then he cocked it. We screaming
              <br />
              BLACK LIVES MATTER when another kill us. but
              <br />
              aint keepin that energy when we killing each
              <br />
              other."
            </div>
          </div>
        </div>
      </div>

      {/* <div className="card card1 mb-3" style={{maxwidth:"100px"}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src="https://f4.bcbits.com/img/0008158198_0" style={{height:"375px"}} alt="..."/>
    </div>
    <div className="col-md-6">
      <div className="card-body cardb1">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a wider card with supporting <br/> text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div> */}

      <div className="start">
        <div className="strt-ttl">In rapping, there is more to understand</div>
        <div className="paragraphhome">
          <p className="parahome">
            We all remember the books we read in school about poetry, such as
            William Shakespeare, Edgar Allan Poe, Maya Angelou, and so much
            more. While reading the poets books, you understand that it rhymes,
            flows, and has a connecting pattern. On the other hand, comes
            rapping where this time now with rhythm. The feeling of putting
            words together and on beat give you the feeling that you can tackle
            anything. If you are at school and you see a group of kids rapping,
            you will want to join in or listen in, the words of battling each
            other using a pattern and flow will always be something popular. The
            thought of the words coming out quickly and having no time to think
            about is undefeatable! Which is why rapping will continue to stand.
            <p className="parahome2">
              As a child we get inspired to start raping based on the style and
              words. However, today's generation is not real rapping. Rapping is
              having a meaning or purpose to your words and expeirence. Today,
              you will hear music about murder, drugs, sex, and anything
              negative. Those music and rap are a negative factor and has change
              the true meaning of rapping. Real rapping was puttings words
              together of oppresion, pain, strength, change, and anything based
              on positivity or real experience. Music and rap have a big purpose
              to those that are listening to them, it will either give you a
              positive outcome on things or a negative outcome.
            </p>
          </p>
        </div>
      </div>
      {/* <div className="explain"> */}
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div className="card">
            <img
              src="https://thumbs.gfycat.com/ObedientSneakyAsiantrumpetfish-size_restricted.gif"
              className="card-img-top"
              alt="..."
            />
            <div className="cardd-body">
              <h5 className="cardd-title">Style</h5>
              <p className="card-text">
              Style in rapping is the kind of way you rap or the image you
                give when rapping. Style is your defination of rap but still with the foundation of rapping.
              </p>
              <p className="style1">
                Click below to understand more about <b> Style </b> in rapping
              </p>
              <a
                href="https://www.youtube.com/watch?v=sEpIQUQAw7g" target="_blank"
                className="btn btn2"
                role="button"
              >
                Click here
              </a>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card">
            <img
              src="https://i.gifer.com/4XVo.gif"
              className="card-img-top"
              alt="..."
            />
            <div className="cardd-body">
              <h5 className="cardd-title">Flow</h5>
              <p className="card-text">
                Flow in rap is your upbeat and distance of time to the rap. If you want 
                fast pace type or slow pace rap, then thats your flow.
              </p>
              <p className="style1">
                Click below to understand more about <b> Flow </b> in rapping
              </p>
              {/* <a href="https://www.youtube.com/watch?v=sEpIQUQAw7g" target="_blank">Click Here</a>  */}
              <a
                href="https://www.youtube.com/watch?v=J4OncgPlOpY" target="_blank"
                className="btn btn2"
                role="button"
              >
                Click here
                </a> 
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card">
            <img
              src="https://i.pinimg.com/originals/0b/08/6f/0b086f71f49e5f6c4703dacd6c18788f.gif"
              style={{ height: "241px" }}
              className="card-img-top"
              alt="..."
            />
            <div className="cardd-body">
              <h5 className="cardd-title">Rhythm</h5>
              <p className="card-text">
                Rhythm in rap is your way of putting words together. It can be very random or simple
                but still sound good when rapping. 
              </p>
              <p className="style1">
                Click below to understand more about <b> Rhythm </b> in rapping
              </p>
              <a
                href="https://www.youtube.com/watch?v=fxIhj1ODtl4" target="_blank"
                className="btn btn2"
                role="button"
              >
                Click here
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </html>
  );
};
export default Home;
