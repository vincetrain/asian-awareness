import "./Summary.css"

import img1 from "../pics/04.jpg"
import Footer from "../components/Footer.jsx"


function Summary() {
    return (
        <div>
            <div className="summary">
                <div className="info1">
                    <img src={img1}></img>
                    <div className="text">
                        <h2>What is Anti-Asian Hate?</h2>
                        <p>
                            With the recent effects of COVID-19, the world has been put under major 
                            amounts of distress. From being forced to stay indoors all day, to even 
                            causing millions of deaths around the world, COVID-19 has definitely caused 
                            a lot of mishaps within humanity. Having originated from China, many members 
                            of society have placed unjustified blame and hate upon people of Chinese 
                            descent, or even people who just “look Chinese”, resulting in a worldwide 
                            xenophobia of the AAPI community. This unrightful hate and blame placed 
                            upon these people have resulted in many instances of harm against innocent 
                            people, either associated or part of this community.
                        </p>
                        <h2>The Effects of Xenophobia Against the Asian Voice.</h2>
                        <p>
                            As stated before, the rise of worldwide xenophobia against the Asian community is heavily 
                            damaging many innocent lives. Because of this increase of hate, 
                            members of the Asian community are having their voices silenced, having less say in their workplaces,
                            being denied services, being avoided, and more, all due to their race or ethnicity. When taking into 
                            consideration the horrible state of misogynistic, prejudical, transphobic, and homophobic behaviours in 
                            today's society, those who not only are Asian but identify within many other minority communities experience
                            even more restrictions on their voices and privileges. 
                        </p>
                    </div>
                </div>
                <div className="info2">
                    <div className="text">

                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Summary;