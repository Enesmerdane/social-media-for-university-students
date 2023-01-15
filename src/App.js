import Navbar from "./components/Navbar";

import Home from "./pages/Home";

import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="*" element={<div>hello</div>} />
            </Routes>
        </div>
    );
}

export default App;
