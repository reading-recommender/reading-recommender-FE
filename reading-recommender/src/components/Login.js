import React from 'react';
import {connect} from 'react-redux';
import {login} from '../actions';
import bookshelf from '../bookshelf.jpg'
import styled, {css, createGlobalStyle} from 'styled-components'



const LoginContainer = styled.div`
  
  background-image: url(${bookshelf});
  background-size: cover;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-position: center;

  & h1 {
    color: #fff;
    text-shadow: 2px 2px 2px #000;  
    font-family: 'Bitter', serif;
    }
  
`
const Button = styled.button`
@keyframes pulse {
    0%   {transform: scale(1);}
    25%  {transform: scale(1.02);}
    50% {transform: scale(1.05);}
    75% {transform: scale(1.07);}
    100% {transform: scale(1.1);}
    
    
  }
  
  
  background-color: #565656;
  border: none;
  border-radius: 15px;
  color: #fff
  padding: 1rem 2rem;
  margin: 1rem 0px;
  cursor: pointer;
  font-family: 'Bitter', serif;
  font-size: 1rem;
  ${props =>
    props.secondary &&
    css`
      background-color: #76323F;
      color: white;
    `};

${props =>
    props.guest &&
    css`
        background-color: #C09F80;
        color: white;
        width: 250px;
        margin: 0 auto;
        margin-top: 1rem;
    `};

    &:hover {
        animation-name: pulse;
        animation-duration: .07s;
    }
  
`

const Form = styled.form`
   display: flex;
   flex-direction: column;
   width: 700px;
   justify-content: center;
   padding: 5rem;
   background-color: #D7CEC7;
   margin: 0 auto;
   border-radius: 30px;
   box-shadow: -5px 5px 5px #000;
   
   & input {
    height: 2rem;
    background-color: #fff;
    margin: 1rem 0px;
    font-family: 'Raleway', serif;
    font-size: 1rem;
  }
  & p {
      color: red;
  }
  
 
    `
  
class Login extends React.Component {
    state = {
            loginForm: true,
            signupForm: false,
            credentials: {
                username: '',
                password: ''
            },
            user: {
                username: '',
                password: ''
                }
        }
    

    handleChange = e => {
        console.log(e.target.value)
        if (this.state.loginForm === true) {
            console.log('LOGIN')
        this.setState({
            credentials: {
                 ...this.state.credentials,
                 [e.target.name] : e.target.value

            }
        })
        } else  {
            console.log('SIGNUP')
            this.setState({
                user: {
                    ...this.state.user,
                    [e.target.name] : e.target.value
                }
            })
        }
        console.log(this.state.user)
    }

    login = e => {
        e.preventDefault();
        console.log(this.state.credentials)
        this.props.login(this.state.credentials).then(() => {
            this.props.history.push('/books')
        });
    }

    // handleChange = e => {
    //     this.setState({
    //         user: {
    //             ...this.state.user,
    //             [e.target.name] : e.target.value
    //         }
    //     })
    // }

    submitUser = e => {
        e.preventDefault();
       // this.submitUser(this.state.user)
       console.log(this.state.user)
    }

    render(){
        return (
            <LoginContainer> 
              
                <h1>{this.state.loginForm ? 'Login' : 'Sign Up'}</h1>
                {this.state.loginForm && 
                <Form className="login-form" onSubmit={this.login}>
                    <input type="text" name="username" value={this.state.credentials.username}  onChange={this.handleChange} required />
                    <input type="password" name="password" value={this.state.credentials.password} onChange={this.handleChange} required />
                    {this.props.error !== null ? <p>Wrong username or pasword. Please try again</p> : null}
                    <Button >Login</Button>
                    <Button secondary onClick={()=> this.setState({loginForm:false,signupForm:true})}>Sign Up</Button>
                    <Button guest>Continue as Guest</Button>
                </Form> }
                {this.state.signupForm && 
                <Form onSubmit={this.submitUser} autoComplete="false">
                    <input name="username" type="text" onChange={this.handleChange} value={this.state.username} required/>
                    <input name="password" type="password" onChange={this.handleChange} value={this.state.password} requried />
                    <Button>Sign Up</Button>
                    <Button secondary onClick={()=> this.setState({loginForm:true,signupForm:false})}>Cancel</Button>
                    <Button guest>Continue as Guest</Button>
                 </Form>
                }
            </LoginContainer>
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