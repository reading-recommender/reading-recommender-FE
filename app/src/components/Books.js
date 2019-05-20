import React from 'react';
import {connect} from 'react-redux'
import { getData } from '../actions';
class Books extends React.Component {
    state = {}

    componentDidMount() {
        this.props.getData()
    }
    render() {
        return (
            
            <div>
                {this.props.isLoading === true ? <h1>...Loading</h1> : null}
               {!this.props.isLoading   && this.props.data.map((item, index) => 
                   
                <div key={index}>
                    
                    <p>{item.location}</p> 
                </div>
               ) }  
            </div>
        );
    }
}

const mapStateToProps = ({isLoading, data})=> ({
    isLoading,
    data
})
export default connect(mapStateToProps, {getData})(Books);