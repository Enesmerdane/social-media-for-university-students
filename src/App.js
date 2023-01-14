import "./App.css";
import { useEffect } from "react";
import { useAuth } from "./context/AuthContext";
import Navbar from "./components/Navbar";
function App() {
    return (
        <div>
            <Navbar />
        </div>
    );
}

export default App;
