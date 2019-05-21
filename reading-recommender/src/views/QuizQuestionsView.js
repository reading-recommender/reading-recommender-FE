import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchQuestions } from "../actions"
import QuestionList from "../components/QuestionList";
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // call our action
    console.log("App did mount props", this.props)
    this.props.fetchQuestions();
  }

  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
      console.log("Fetching data render", this.props)
    }
    
    return (
      <div className="FriendsList_wrapper">
        <QuestionList quizQuestions={this.props.quizQuestions} />
      </div>
    );
  }
}

// export default App;
const mapStateToProps = state => {
  console.log('mapStateToProps', state)
  return {
    quizQuestions: state.quizQuestions,
    fetching: state.fetchingQuestions,
    error: state.error,
  }
}

export default connect(
  mapStateToProps /* mapStateToProps replaces null here */,
  {
    fetchQuestions,/* action creators go here */
  }
)(App);