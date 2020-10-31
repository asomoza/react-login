import React, { createContext, useContext, useState } from "react";
import { hot } from "react-hot-loader";
import { Router } from "@reach/router"

import { AuthContext } from "./helpers/AuthContext";

import { Login } from "./components/Login/Login";
import { Dashboard } from "./components/Dashboard/Dashboard";

const PrivateRoute = props => {
    const { user } = useContext(AuthContext);

    let { as: Comp, ...restOfTheProps  } = props;
    return user ? <Comp {...restOfTheProps } /> : <Login />;
};

function App() {
    const [user, setUser] = useState(null);

    const updateUser = newUser => {
        setUser(newUser);
    };

    return (
        <div className="App">
            <AuthContext.Provider value={{user, updateUser}}>
                <Router className="router-container">
                    <Login text="Login App" path="/" />
                    <Login text="Login App" path="/login" />
                    <PrivateRoute as={Dashboard} path="/dashboard" />
                </Router>
            </AuthContext.Provider>
        </div>
    );
}

export default hot(module)(App);