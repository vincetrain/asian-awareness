import "./styles.css";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";


import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Educate from "./pages/Educate.jsx";
import Resources from "./pages/Resources.jsx";
import Help from "./pages/Help.jsx";

import { Routes, Route, useLocation } from 'react-router-dom';
import { CSSTransition, SwitchTransition } from 'react-transition-group'

function Content() {
    let location = useLocation();
    return(
        <div className="container">
            <SwitchTransition>
                <CSSTransition key={location.pathname} classNames="fade" timeout={500}>
                    <Routes location={location}>
                        <Route exact path="/" element={<Home />} />
                        <Route path="/About" element={<About />} />
                        <Route path="/Educate" element={<Educate />} />
                        <Route path="/Resources" element={<Resources />} />
                        <Route path="/Help" element={<Help />} />
                    </Routes>
                </CSSTransition>
            </SwitchTransition>
        </div>
    )


}

function App() {
    return (
        <div className="content-container">
            <Navbar />
            <Content />
            <Footer />
        </div>
    )
}

export default App;