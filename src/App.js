import "./stylesheet.css";

import Navbar from "./components/Navbar.jsx";

import Home from "./pages/Home.jsx";
import Summary from "./pages/Summary.jsx";
import History from "./pages/History.jsx";
import Resources from "./pages/Resources.jsx";
import Help from "./pages/Help.jsx";

import { Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';

const animations = {
    initial: {opacity: 0},
    animate: {opacity: 1, x: 0},
    exit: {opacity: 0}
}

function App() {
    return (
        <div>
            <Navbar />

            <motion.div
            variants={animations}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{duration: 0.6}}
            >
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/Summary" element={<Summary />} />
                    <Route path="/History" element={<Home />} />
                    <Route path="/Resources" element={<Home />} />
                    <Route path="/Help" element={<Home />} />
                </Routes>
            </motion.div>
        </div>
    )
}

export default App;