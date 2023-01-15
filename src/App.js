import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Events from "./pages/Events";
import Friends from "./pages/Friends";
import HotTopics from "./pages/HotTopics";

import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/events" element={<Events />} />
                <Route path="/hottopics" element={<HotTopics />} />
                <Route path="/friends" element={<Friends />} />
                <Route path="*" element={<div>hello</div>} />
            </Routes>
        </div>
    );
}

export default App;
