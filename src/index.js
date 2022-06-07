import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

import Navbar from "./components/Navbar.jsx";
import Gallery from "./components/Gallery.jsx";

ReactDOM.render(
    <div>
        <Navbar />
        <Gallery />
    </div>
    , document.getElementById("root")
);