import Logo from "../assets/logo.svg";
import "./Navbar.css";
import React from "react";
import { Link } from "react-router-dom"

function Navbar() {
    return(
        <div id="navbar">
            <Link className="navBrand" to="/">
                <span className="centerer"></span>
                <img src={Logo} alt="Asian Awareness" />
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