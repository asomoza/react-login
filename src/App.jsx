import React, { Component} from "react";
import { hot } from "react-hot-loader";

import Login from "./components/Login/Login";

class App extends Component{
    render(){
        return(
            <div className="App">
                <Login text="Login App" />
            </div>
        );
    }
}

export default hot(module)(App);