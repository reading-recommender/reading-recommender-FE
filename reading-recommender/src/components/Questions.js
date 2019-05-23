import React from "react";
import Answer from "./Answer";
import styled, {css} from 'styled-components'
// import { connect } from "http2";
import {fetchingQuestions} from "../actions"
import {connect} from "react-redux"

const QuestionContainer = styled.div`
  
  background-color: #565656;
  border: 1px solid black;
  color: #fff
  padding: 1rem 2rem;
  margin: 0 auto;
  max-width: 50%;
  ${props =>
    props.secondary &&
    css`
      background-color: #76323F;
      color: white;
    `};
`

class Questions extends React.Component {
    componentDidMount(){
        this.props.fetchingQuestions();
    }
  render(){
      return(
        <QuestionContainer>
            {this.props.quizQuestions.map(item => 
            <div>
               <div><strong>Question: </strong>{item.question}</div>
                {item.answers.map(answer => 
                    <div> <h1>{answer.content}</h1> </div>
                    )}
            </div>
            )}
        
      </QuestionContainer>
      )
  }
}
const mapStateToProps = ({quizQuestions}) => ({
    quizQuestions
})
export default connect(mapStateToProps, {fetchingQuestions})(Questions);
// export default Questions;

 {/* {this.props.fetchingQuestions.answers.map(answer => {
               return <Answer key={answer.content} answer={answer.content}/>})} */}
               
            //    <div><strong>Answers: {console.log(item.answers)}</strong></div>