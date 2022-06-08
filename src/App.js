import Navbar from "./components/Navbar.jsx";

import Home from "./pages/Home.jsx";
import Summary from "./pages/Summary.jsx";
import History from "./pages/History.jsx";
import Resources from "./pages/Resources.jsx";
import Help from "./pages/Help.jsx";


import { Routes, Route } from 'react-router-dom';

function App() {
    return (
        <div>
            <Navbar />
            <div className="container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Summary" element={<Summary />} />
                    <Route path="/History" element={<Home />} />
                    <Route path="/Resources" element={<Home />} />
                    <Route path="/Help" element={<Home />} />

                </Routes>
            </div>
        </div>
    )
}

export default App;