import React from 'react';
import {connect} from 'react-redux';
import {login} from '../actions';

class Login extends React.Component {
    state = {
            credentials: {
                username: '',
                password: ''
            }
        }
    

    handleChange = e => {
        console.log(e.target.value)
        this.setState({
            credentials: {
                 ...this.state.credentials,
                 [e.target.name] : e.target.value

            }
        })
    }

    login = e => {
        e.preventDefault();
        console.log(this.state.credentials)
        this.props.login(this.state.credentials).then(() => {
            this.props.history.push('/books')
        });
    }

    render(){
        return (
            <div className="login"> 
                <h1>Please Login</h1>
                <form className="login-form" onSubmit={this.login}>
                    <input type="text" name="username" value={this.state.credentials.username}  onChange={this.handleChange} required />
                    <input type="password" name="password" value={this.state.credentials.password} onChange={this.handleChange} required />
                    <button>Login</button>
                </form>
            </div>
        );
    }
}


const mapStateToProps = state => ({
    isLoggingIn: state.isLoggingIn
  });
  export default connect(null,{login})(Login)
//   export default connect(
//     mapStateToProps,
//     { login }
//   )(Login);