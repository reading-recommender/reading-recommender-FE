import React from "react";
import styled, {css} from 'styled-components'
import {connect} from "react-redux"
import bookshelf from '../bookshelf.jpg'
import {questions} from '../server'
import {handleSubmit} from '../actions'

const QuestionContainer = styled.div`
background-image: url(${bookshelf});
background-size: cover;
width: 100%;
height: 100%;
display: flex;
justify-content: center;
flex-direction: column;
background-position: center;
padding: 20px;
& h1 {
  color: #fff;
  text-shadow: 2px 2px 2px #000;  
  font-family: 'Bitter', serif;
  } 
`
const QuestionContainerStyle = styled.div`
background-color: #ffffffe8;
border: 1px solid black;
color: #fff
padding: 1rem 2rem;
margin: 0 auto;
min-width: 50%;
max-width: 50%;
display: flex;
flex-wrap: wrap;
margin-bottom: 40px;
`
const QuestionStyle = styled.div`
display: flex;
flex-wrap: wrap;
width:100%;
padding: 10px;
font-size: 1.3rem;
color:black;
`
const AnswersStyle = styled.div`
display: flex;
flex-wrap: wrap;
width:100%;
border-top: 1px solid #0000003b;
padding: 40px;
font-size: 1.1rem;
color:black;
align-items: center;
cursor: pointer;
& .answer {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: baseline;
}
& .selected {
    display: hidden;
}
`




class Questions extends React.Component {
    state = {
        submissions: {
            'Q1': '',
            'Q2': '',
            'Q3': '',
            'Q4': '',
            'Q5': '',
            'Q6': ''
        }
    }
    changeColor = (e) => {
       e.target.style.backgroundColor = '#00ff80';
       //this.submitAnswer
     }

     answerIndex = index => {
         console.log(index)
        // this.submitAnswer(index);
     }
     
     submitAnswer = (question, answer) => {
       
         this.setState({
             submissions: {
                ...this.state.submissions,
                [`Q${question}`]: answer
             }
         })
         //this.props.handleSubmit(this.state.submissions)
        return this.state.submissions
     }

  render(){
    return (
        <QuestionContainer>
            {questions.map((question, index) => 
                <QuestionContainerStyle key={index}>
                    <h1>{question.question}</h1>
                    {question.answers.map((answer, index) => 
                    <AnswersStyle key={index} className="answers" 
                    onClick={(e) => {
                        this.answerIndex(index + 1);
                        this.changeColor(e);
                        this.submitAnswer( question.id, index + 1)
                     }}>{answer.content}</AnswersStyle>)}
                </QuestionContainerStyle>
                )}
                <button onClick={() => this.props.handleSubmit(this.state.submissions)}></button>        
      </QuestionContainer>
    )
}}


export default connect(null, {handleSubmit})(Questions);