import React from 'react';
import {connect} from 'react-redux';
import {login} from '../actions';

import styled, {css} from 'styled-components'

const Button = styled.button`
  
  background-color: #565656;
  border: none;
  border-radius: 15px;
  color: #fff
  padding: 1rem 2rem;
  margin: 1rem 0px;
  cursor: pointer;
  ${props =>
    props.secondary &&
    css`
      background-color: #76323F;
      color: white;
    `};
  
`

const Form = styled.form`
   display: flex;
   flex-direction: column;
   width: 700px;
   justify-content: center;
   padding: 5rem;
   background-color: #D7CEC7;
   margin: 0 auto;
   & input {
    height: 2rem;
    background-color: #fff;
    margin: 1rem 0px;
  }
  & p {
      color: red;
  }
 
    `
  
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
                <Form className="login-form" onSubmit={this.login}>
                    <input type="text" name="username" value={this.state.credentials.username}  onChange={this.handleChange} required />
                    <input type="password" name="password" value={this.state.credentials.password} onChange={this.handleChange} required />
                    {this.props.error !== null ? <p>Wrong username or pasword. Please try again</p> : null}
                    <Button >Login</Button>
                    <Button secondary onClick={()=> this.props.history.push('/signup')}>Sign Up</Button>
                </Form>
            </div>
        );
    }
}


const mapStateToProps = ({isLoggingIn, error}) => ({
    isLoggingIn,
    error

  });
  export default connect(mapStateToProps,{login})(Login)
//   export default connect(
//     mapStateToProps,
//     { login }
//   )(Login);