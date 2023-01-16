import { useState, createContext, useEffect, useContext } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        checkUser();
    }, []);

    const checkUser = () => {
        if (localStorage.getItem("username") !== null) {
            setUser(localStorage.getItem("username"));
            setLoggedIn(true);
        } else {
            setUser(null);
            setLoggedIn(false);
        }
    };

    const login = (username) => {
        localStorage.setItem("username", username);
        setUser(username);
        setLoggedIn(true);
    };

    const logout = () => {
        localStorage.removeItem("username");
        setUser(null);
        setLoggedIn(false);
    };

    const values = { user, loggedIn, login, logout };

    return (
        <AuthContext.Provider value={values}> {children}</AuthContext.Provider>
    );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
