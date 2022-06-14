import "./Educate.css";
import { Chrono } from "react-chrono";

import items from "./HistoryItems.js"


function Educate() {
    return (
        <div className="educate">
            <div className="headingbg"></div>
            <div className="heading">
                <h1>What is Anti-Asian Hate?</h1>
            </div>
            <div id="whatis">
                <div className="text">
                    <p>
                        With the recent effects of COVID-19, the world has been put under major 
                        amounts of distress. From being forced to stay indoors all day, to even 
                        causing millions of deaths around the world, COVID-19 has definitely caused 
                        a lot of mishaps within humanity. Having originated from China, many members 
                        of society have placed unjustified blame and hate upon people of Chinese 
                        descent, or even people who just “look Chinese”, resulting in a worldwide 
                        xenophobia of the AAPI community. This unrightful hate and blame placed 
                        upon these people have resulted in many instances of harm against innocent 
                        people, either associated or part of this community. Because of this increase of hate, 
                        members of the Asian community are having their voices silenced, having less say in their workplaces,
                        being denied services, being avoided, and more, all due to their race or ethnicity. When taking into 
                        consideration the horrible state of misogynistic, prejudical, transphobic, and homophobic behaviours in 
                        today's society, those who not only are Asian but identify within many other minority communities experience
                        even more restrictions on their voices and privileges.
                    </p>
                </div>
            </div>
            <div className="history" >
                <h1>The Long and Gruesome History Behind Anti-Asian Hate</h1>
                <div style={{width: "50%", height: "85vh", margin: "auto"}}>
                    <Chrono 
                    items={items} 
                    scrollable={true}
                    mode="HORIZONTAL"
                    cardPositionHorizontal="TOP"
                    useReadMore={false} 
                    cardWidth={1080}
                    cardHeight={240}
                    theme={{
                        primary: "black", 
                        secondary: "white",
                        titleColor: "black" 
                    }}
                    />
                </div>
            </div>

        </div>
    )
}

export default Educate;