import React from 'react';
import {connect} from 'react-redux'
import { getData, guestInactive } from '../actions';
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

class Books extends React.Component {
    state = {}

    componentDidMount() {
        this.props.getData()
        
    }

    logOut = () => {
        localStorage.clear();
        this.props.guestInactive(this.state.guest);
        this.props.history.push('/')
        //window.location.reload();
    }
    render() {
        return (
            
            <div>
                <Button secondary onClick={this.logOut}>Log Out</Button>
                {this.props.isLoading === true ? <h1> {console.log(this.props.guest)}...Loading</h1> : null}
               {!this.props.isLoading && console.log(this.props.data)}   
               
            </div>
        );
    }
}

const mapStateToProps = ({isLoading, data, guest})=> ({
    isLoading,
    data
})
export default connect(mapStateToProps, {getData, guestInactive})(Books);