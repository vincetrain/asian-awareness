import Logo from "../components/Logo.jsx";
import "./Navbar.css";
import React from "react";
import { Link } from "react-router-dom"
import { useState, useRef } from "react";

function Navbar() {
    const [fix, setFix] = useState(false);

    function setFixed() {
        if (window.scrollY > 1) {
            setFix(true);
        }
        else {
            setFix(false);
        }
    }

    window.addEventListener("scroll", setFixed);

    return(
        <div id="navbar" className= {fix ? "navbar fixed" : "navbar"}>
            <Link className="navBrand" to="/">
                <span className="centerer"></span>
                <Logo />
            </Link>
            <ul className="navList">
                <Link className="navItem" to="/">Home</Link>
                <Link className="navItem" to="/Summary">Summary</Link>
                <Link className="navItem" to="/History">History</Link>
                <Link className="navItem" to="/Resources">Resources</Link>
                <Link className="navItem" to="/Help">How to Help</Link>
            </ul>
        </div>
    )
}

export default Navbar;