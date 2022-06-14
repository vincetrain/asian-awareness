import "./About.css"
import Logo from "../components/Logo.jsx";

function About() {
    return (
        <div className="about">
            <div id="heading">
                <Logo className="logo" />
            </div>
            <div className="text-container">
                <div id="values" className="about-info">
                    <h1>Our Values</h1>
                    <ul>
                        <li>
                        <h2>FREEDOM</h2>
                        <p>The Asian community, and many other communities have been systematically oppressed for years without end. Because of this, Asian Awareness values the freedom that these communities deserve.</p>
                        </li>
                        <li>
                        <h2>SAFETY</h2>
                        <p>Asian Awareness believes in the safety of all allues, no matter their religion, culture, ethnicity, or background.</p>
                        </li>
                    </ul>
                </div>

                <span className="divider" />

                <div id="what-we-do" className="about-info">
                    <h1>How we Help?</h1>
                    <ul>
                        <li><h2>SPREADING AWARENESS</h2>
                        <p>Here at Asian Awareness, we believe that the best way to stop Anti-Asian hate is by spreading awareness about society's wrong-doings, leading people into making the better and right choices when it comes to respecting others.</p></li>
                        <li><h2>EDUCATING OTHERS</h2>
                        <p>Asian Awareness willingly goes out of their way to host community-friendly events that help educate others about Asian cultures in order to develop a mutual understanding between the Asian community and the world.</p></li>
                        <li><h2>GIVING A VOICE TO THOSE IN NEED</h2>
                        <p>We know that Anti-Asian hate, especially in this time and age, can make things very difficult to speak out about. Asian Awareness aims to subvert and defend fellow allies from all the hate and negativity that people's voices may face, giving the proper protected speaking pedestal that everyone deserves.</p></li>
                    </ul>
                </div>

                <span className="divider" />

                <div id="volunteer">
                    <h1>Think you can help out? Reach out below.</h1>
                    <ul>
                        <li><h2>@asianawareness on Instagram</h2></li>
                        <li><h2>+1 (800) 123 4567</h2></li>
                        <li><h2>asianawareness@asianawareness.com</h2></li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default About;