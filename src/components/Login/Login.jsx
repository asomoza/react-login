import React from "react";

import "./login.css";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            user: '',
            password: '',
            error: ''
        };

        this.handleUserChange = this.handleUserChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(), 1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
           date: new Date()
        });
    }

    handleLogin(event) {
        event.preventDefault();

        if (this.state.user !== 'john' || this.state.password !== 'qwerty') {
            this.setState({
                error: 'Incorrect user or password.'
            })
        } else {
            // Auth passed, redirect to dashboard
            console.log("success");
        }
    }

    handleUserChange(event) {
        this.setState({ user: event.target.value });
    }

    handlePasswordChange(event) {
        this.setState({ password: event.target.value });
    }

    render() {
        return (
            <div className='login-container'>
                <div className='box'>
                    <div>
                        <div className='title'>{ this.props.text }</div>
                        <div className='date'>{ this.state.date.toLocaleTimeString() }</div>
                    </div>
                    <div>
                        <div>
                            <input type="Text" value={ this.state.user } onChange={ this.handleUserChange }/>
                        </div>
                        <div>
                            <input type="Password" value={ this.state.password } onChange={ this.handlePasswordChange }/>
                        </div>
                        <div className='error'>{ this.state.error }</div>
                        <div>
                            <button type="button" onClick={this.handleLogin}>Login</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}

export default Login;