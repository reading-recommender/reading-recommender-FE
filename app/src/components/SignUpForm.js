import React from 'react'
import styled, {css} from 'styled-components';

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

const Form = styled.div`
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
 
    `
class SignUpForm extends React.Component {
    state = {
        user: {
        username: '',
        password: ''
        }
    }

 
    handleChange = e => {
        this.setState({
            user: {
                ...this.state.user,
                [e.target.name] : e.target.value
            }
        })
    }

    submitUser = e => {
        this.submitUser(this.state.user)
    }

    render() {
        return (
            <div>
            <h1>Sign Up</h1>
            <Form onSubmit={this.submitUser} autoComplete="false">
                <input name="username" type="text" value={this.state.username} required/>
                <input name="password" type="password" value={this.state.password} requried />
                <Button>Sign Up</Button>
                <Button secondary onClick={()=> this.props.history.push('/login')}>Cancel</Button>
            </Form>
            </div>
        );
    }
}

export default SignUpForm;