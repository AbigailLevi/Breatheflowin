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
    <BrowserRouter basename="/Breathe.flowin">
      <Link to="/kendrick" />
      <Link to="/tomorrow" />
    </BrowserRouter>
  );
}

// function Home() {
//   return <h2> yo</h2>;
// }

export default App;
