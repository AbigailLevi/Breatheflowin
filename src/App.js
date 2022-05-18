import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Kendrick from "./Kendrick.js";
import Home from "./Home.js";
import Learnrap from "./Learnrap.js";
import Gallery from "./Gallery.js";
import Music from "./Music.js";
import History from "./History.js";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faEnvelope,
  faLock,
  faCompass,
} from "@fortawesome/free-solid-svg-icons";

library.add(faEnvelope, faLock, faCompass);

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/kendrick">
            <Kendrick />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/learnRap">
            <Learnrap />
          </Route>
          <Route path="/gallery">
            <Gallery />
          </Route>
          <Route path="/music">
            <Music />
          </Route>
         {/*} <Route path="/history">
            <History />
  </Route> */}
        </Switch>
      </div>
    </Router>
  );
}

// function Home() {
//   return <h2> yo</h2>;
// }

export default App;
