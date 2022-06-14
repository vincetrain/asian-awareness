import Logo from "../components/Logo.jsx";
import "./Navbar.css";
import React from "react";
import { Link } from "react-router-dom"
import { useState, useRef } from "react";

function Navbar() {
    const [shadow, giveShadow] = useState(false);

    function setState() {
        if (window.scrollY > 1) {
            giveShadow(true);
        }
        else {
            giveShadow(false);
        }
    }

    window.addEventListener("scroll", setState);

    return(
        <div className="navbar" className= {shadow ? "navbar shadow" : "navbar"}>
            <Link className="navBrand" to="/">
                <span className="centerer"></span>
                <Logo />
            </Link>
            <ul className="navList">
                <Link className="navItem" to="/">Home</Link>
                <Link className="navItem" to="/About">About</Link>
                <Link className="navItem" to="/Educate">Educate</Link>
                <Link className="navItem" to="/Resources">Resources</Link>
                <Link className="navItem" to="/Help">How to Help</Link>
            </ul>
        </div>
    )
}

export default Navbar;