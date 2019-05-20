import React from 'react'

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
            <form onSubmit={this.submitUser} autoComplete="false">
                <input name="username" type="text" value={this.state.username} required/>
                <input name="password" type="password" value={this.state.password} requried />
                <button>Sign Up</button>
                <button onClick={()=> this.props.history.push('/login')}>Cancel</button>
            </form>
        );
    }
}

export default SignUpForm;