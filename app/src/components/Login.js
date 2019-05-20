import React from 'react';
import {connect} from 'react-redux';
//import {login} from '../actions';

class Login extends React.Component {
    constructor(){
        super();
        this.state = {
            credentials: {
                username: '',
                password: ''
            }
        }
    }

    handleChange = e => {
        console.log(e.target.value)
        this.setState({
            credentials: {
                 ...this.state.credentials,
                 [e.target.name] : [e.target.value]

            }
        })
    }

    render(){
        return (
            <div className="login"> 
                <h1>Please Login</h1>
                <form className="login-form">
                    <input type="text" name="username" value={this.state.credentials.username}  onChange={this.handleChange} required />
                    <input type="password" name="password" value={this.state.credentials.password} onChange={this.handleChange} required />
                    <button>Login</button>
                </form>
            </div>
        );
    }
}

export default Login