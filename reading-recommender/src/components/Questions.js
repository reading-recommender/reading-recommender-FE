import React from "react";
import Answer from "./Answer";
import styled, {css} from 'styled-components'

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

const Questions = props => {
  // console.log(props.question.answers)
  return <QuestionContainer>
    <div><strong>Question: </strong>{props.question.question}</div>
    <div><strong>Answers: {props.answer}</strong>
    
    {props.question.answers.map(answer => {
    return <Answer key={answer.content} answer={answer.content}/>})}
    
    </div>
  </QuestionContainer>;
};

export default Questions;