import "./styles.css";

import Navbar from "./components/Navbar.jsx";

import Home from "./pages/Home.jsx";
import Summary from "./pages/Summary.jsx";
import History from "./pages/History.jsx";
import Resources from "./pages/Resources.jsx";
import Help from "./pages/Help.jsx";

import { Routes, Route, useLocation } from 'react-router-dom';
import { CSSTransition, SwitchTransition } from 'react-transition-group'

function Content() {
    let location = useLocation();
    return(
        <div>
            <SwitchTransition>
                <CSSTransition key={location.pathname} classNames="fade" timeout={400}>
                    <Routes location={location}>
                        <Route exact path="/" element={<Home />} />
                        <Route path="/Summary" element={<Summary />} />
                        <Route path="/History" element={<Home />} />
                        <Route path="/Resources" element={<Home />} />
                        <Route path="/Help" element={<Home />} />
                    </Routes>
                </CSSTransition>
            </SwitchTransition>
        </div>
    )


}

function App() {
    return (
        <div>
            <Navbar />
            <Content />
        </div>
    )
}

export default App;