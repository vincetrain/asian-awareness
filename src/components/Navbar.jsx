import Logo from "../assets/logo.png";
import "./Navbar.css";
import React from "react";

function Navbar() {
    return(
        <div id="navbar">
            <a href="/">
                <span className="centerer"></span>
                <img src={Logo} alt="Asian Awareness" />
            </a>
            <ul className="navItems">
                <li><a href="/">Home</a></li>
                <li><a href="Summary">Summary</a></li>
                <li><a href="History">History</a></li>
                <li><a href="Resources">Resources</a></li>
                <li><a href="Help">How to Help</a></li>
            </ul>
        </div>
    )
}

export default Navbar;