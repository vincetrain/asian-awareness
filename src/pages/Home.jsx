import Gallery from "../components/Gallery.jsx";

import img1 from "../pics/01.jpg";
import img2 from "../pics/02.jpg";
import img3 from "../pics/03.jpg";

import "./Home.css";

const picList = [img1, img2, img3];

function Home() {
    return (
        <div className="home">
            <Gallery interval={6000} picList={picList}/>
        </div>
    )
}

export default Home;
