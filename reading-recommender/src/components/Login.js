import React from 'react';
import {connect} from 'react-redux';
import {login, guestActive, signUp} from '../actions';
import bookshelf from '../bookshelf.jpg'
import styled, {css, createGlobalStyle} from 'styled-components'


const LoginContainer = styled.div`
  //background-image: url(${bookshelf});
  background-size: cover;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-position: center;
  padding: 20px;
  margin: 0 auto;
  & h1 {
    color: #fff;
    text-shadow: 2px 2px 2px #000;  
    font-family: 'Bitter', serif;
    } 

@media (max-width: 400px) {
    width: fit-content;
  
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
  margin: 0 auto;
  margin-top: 1rem;
  margin-bottom: 1rem;
  cursor: pointer;
  font-family: 'Bitter', serif;
  font-size: 1rem;
  width: 100%;
  //max-width: 300px;
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
        width: 75%; 
        margin: 0 auto;
        margin-top: 1rem;
    `};
    &:hover {
        animation-name: pulse;
        animation-duration: .07s;
    }  
}
`
const Form = styled.form`
   display: flex;
   flex-direction: column;
   width: 50%;
   justify-content: center;
   padding: 5rem;
   background-color: #D7CEC7;
   margin: 0 auto;
   border-radius: 30px;
   box-shadow: -5px 5px 5px #000;
   max-width: 700px;
   
   & input {
    // height: 2rem;
    // background-color: #fff;
    // margin: 1rem 0px;
    // font-family: 'Raleway', serif;
    // font-size: 1rem;
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    resize: vertical;
  }
  & .col-1 {
    float: left;
    width: 100%;
    margin-top: 6px;
  }
  .row:after {
    content: "";
    display: table;
    clear: both;
  }
  @media screen and (max-width: 600px) {
    .col-1, input {
      width: 100%;
    }
  }
  @media screen and (max-width: 900px) {
     button {
      font-size: .7rem;
      margin-top: 5px;
      margin-bottom: 5px;
    }
  }

  & p {
      color: red;
  }
  & .successCreate {
    color: limegreen;
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
            this.props.history.push('/questions')
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
       this.props.signUp(this.state.user)
       console.log(this.state.user)
       console.log('testsending')

       
       this.setState({loginForm:true,signupForm:false})
       
    }

    handleGuest = (e) => {
        e.preventDefault();
        this.props.guestActive(this.state.guest)
        console.log(this.state.guest)

        this.props.history.push('/questions')    

    }

    render(){
        return (
            <LoginContainer className="form"> 
              
                <h1>{this.state.loginForm ? 'Login' : 'Sign Up'}</h1>
                {this.state.loginForm && 
                <Form className="login-form" onSubmit={this.login}>
                {this.props.newUser === true ? <p className="successCreate">You have successfully created an account</p> : null}
                {this.props.pending === true && this.props.newUser === false ? <p>{this.props.error}</p> : null}
                    <div className="row">
                        <div className="col-1">
                         <input type="text" name="username" value={this.state.credentials.username}  onChange={this.handleChange} required />
                      </div>
                    </div>
                    <div className="row">
                        <div className="col-1">
                            <input type="password" name="password" value={this.state.credentials.password} onChange={this.handleChange} required />
                        </div>
                    </div>
                    {this.props.error !== null && this.props.pending === false  ? <p>Wrong username or pasword. Please try again</p> : null}
                    <Button >Login</Button>
                    <Button secondary onClick={()=> this.setState({loginForm:false,signupForm:true})}>Sign Up</Button>
                    <Button guest onClick={this.handleGuest}>Continue as Guest</Button>
                </Form> }
                {this.state.signupForm && 
                <Form onSubmit={this.submitUser} autoComplete="false">
                    <input name="username" type="text" onChange={this.handleChange} value={this.state.username} required/>
                    <input name="password" type="password" onChange={this.handleChange} value={this.state.password} requried />
                    <Button>Sign Up</Button>
                    <Button secondary onClick={()=> this.setState({loginForm:true,signupForm:false})}>Cancel</Button>
                    
                 </Form>
                }
            </LoginContainer>
        );
    }
}


const mapStateToProps = ({isLoggingIn, error, newUser, pending}) => ({
    isLoggingIn,
    error,
    newUser,
    pending

  });

  export default connect(mapStateToProps,{login, guestActive, signUp})(Login)

//   export default connect(
//     mapStateToProps,
//     { login }
//   )(Login);