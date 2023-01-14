import "./App.css";
import { useEffect } from "react";
import { useAuth } from "./context/AuthContext";

function App() {
  const { user, loggedIn, login, logout } = useAuth();

  useEffect(() => {
    console.log("App rendered");
  }, []);

  const buttonHandler = () => {
    if (loggedIn) {
      return logout();
    } else {
      return login("user1");
    }
  };

  return (
    <div className="App">
      <h1>Welcome to the socializing way of university students</h1>
      User: {user}
      <br />
      <button onClick={buttonHandler}>{loggedIn ? "Logout" : "Login"} </button>
    </div>
  );
}

export default App;
