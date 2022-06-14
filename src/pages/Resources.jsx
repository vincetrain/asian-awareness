import "./Resources.css";
import img1 from "../pics/DanLee-StopAsianHatePoster-White-Web.png";



function Resources() {
    return (
        <div className="resources">
            <div className="img-container">
                <img src={img1} />
            </div>
            <div className="info-container">
                <div id="ally-organizations" className="resources-info">
                    <h1>Anti-Asian Hate</h1>
                    <p>Other organizations working against Anti-Asian hate.</p>
                    <ol>
                        <li>
                            <a href="https://www.elimin8hate.org/" target="_blank">elimin8hate [WEB]</a>
                        </li>
                        <li>
                            <a href="https://stopaapihate.org/" target="_blank">stopaapihate [WEB]</a>
                        </li>
                        <li>
                            <a href="https://www.covidracism.ca/" target="_blank">Covid Racisim [WEB]</a>
                        </li>
                        <li>
                            <a href="https://acctfoundation.ca/" target="_blank">Action! Chinese Canadians Together [WEB]</a>
                        </li>
                    </ol>
                </div>

                <div id="education" className="resources-info">
                    <h1>Educational Resources</h1>
                    <p>Resources to learn more about Asian Culture and Anti-Asian Hate.</p>
                    <ol>
                        <li>
                            <a href="https://www.tdsb.on.ca/Portals/0/docs/Addressing%20Anti-Asian%20Racism%20Resource%20Booklet%20final%20web%20Jan%2024.pdf" target="_blank">Addressing Anti Asian Racism [PDF]</a>
                        </li>
                        <li>
                            <a href="https://mcusercontent.com/9fbfd2cf7b2a8256f770fc35c/files/35c9daca-3fd4-46f4-a883-c09b8c12bbca/covidracism_final_report.pdf" target="_blank">A Year of Racist Attacks [PDF]</a>
                        </li>
                    </ol>
                </div>

                <div id="healing" className="resources-info">
                    <h1>Healing and Mental Health</h1>
                    <p>Information about how to heal and stay healthy when surrounded by Anti-Asian hate.</p>
                    <ol>
                        <li>
                            <a href="https://www.goodreads.com/book/show/43319546-the-racial-healing-handbook" target="_blank">The Racial Healing Handbook [BOOK]</a>
                        </li>
                        <li>
                            <a href="https://drive.google.com/file/d/0B-nj4wfR3762NnhpWjBQN3hmTkE/view?resourcekey=0-LnUrp0H8FHkgM7XpNGHcNQ" target="_blank">Surviving and Resisting Hate: A Toolkit for People of Colour [PDF]</a>
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default Resources;