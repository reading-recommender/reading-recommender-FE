import React from "react";

import styled, {css} from 'styled-components'

import {fetchingQuestions} from "../actions"
import {connect} from "react-redux"

import {questions} from '../server'

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
    }
  render(){
      return(
        <QuestionContainer>

            {questions.map(question => 
                <div>
                    <h1>{question.question}</h1>
                     {question.answers.map(answer => <p>{answer.content}</p>)}
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


