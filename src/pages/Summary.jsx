import "./Summary.css"

import img1 from "../pics/04.jpg"


function Summary() {
    return (
        <div>
            <div className="summary">
                <img src={img1}></img>
                <div className="summaryText">
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
                        people, either associated or part of this community. Due to this, many 
                        people of Asian descent have been targeted in many hate-crimes, resulting 
                        in job losses, dissociation/avoidance, bullying, and even deaths. 
                    </p>
                </div>
            </div>


        </div>
    )
}

export default Summary;