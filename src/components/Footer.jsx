import "./Footer.css";
import Logo from "./Logo"

function Footer() {
    return (
        <div className="footer">
            <div className="footerbg"></div>
            <div className="footerContent">
                <Logo />
                <span className="centerer"></span>
                <div className="quote">
                    <p>“No one is born hating another person because of the color of his skin, or his background, or his religion. People must learn to hate, and if they can learn to hate, they can be taught to love, for love comes more naturally to the human heart than its opposite.” - Nelson Mandela, 1994.</p>
                </div>
                <ul className="hashtags">
                    <li>#stopasianhate</li>
                    <li>#stopantiasianhate</li>
                </ul>
            </div>
        </div>
    );
}

export default Footer;