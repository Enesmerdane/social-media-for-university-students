import "./App.css";
import { useEffect } from "react";
import { useAuth } from "./context/AuthContext";
import Navbar from "./components/Navbar";
function App() {
    const { user, loggedIn, login, logout } = useAuth();

    const buttonHandler = () => {
        if (loggedIn) {
            return logout();
        } else {
            return login("user1");
        }
    };

    return (
        <div>
            <Navbar />
            User: {user}
            <br />
            <button onClick={buttonHandler}>
                {loggedIn ? "Logout" : "Login"}
            </button>
        </div>
    );
}

export default App;
