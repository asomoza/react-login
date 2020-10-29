import React, { Component} from "react";
import { hot } from "react-hot-loader";
import { Router } from "@reach/router"

import Login from "./components/Login/Login";
import Dashboard from "./components/Dashboard/Dashboard";

class App extends Component{
    render(){
        return(
            <div className="App">
                <Router className="router-container">
                    <Login text="Login App" path="/" />
                    <Login text="Login App" path="/login" />
                    <Dashboard path="dashboard"/>
                </Router>
            </div>
        );
    }
}

export default hot(module)(App);