import Logo from "../assets/logo.svg";
import "./Navbar.css";


function Navbar() {
    return(
        <div id="navbar">
            <a href=".">
                <span className="centerer"></span>
                <img src={Logo} alt="Asian Awareness" />
            </a>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#summary">Summary</a></li>
                <li><a href="#history">History</a></li>
                <li><a href="#resources">Resources</a></li>
                <li><a href="#help">How to Help</a></li>
            </ul>
        </div>
    )
}

export default Navbar;