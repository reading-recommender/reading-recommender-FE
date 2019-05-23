import React from "react";
import styled, {css} from 'styled-components'
import {connect} from "react-redux"
import bookshelf from '../bookshelf.jpg'
import {questions} from '../server'

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
    changeColorOnClick = event => {
        event.target.style.backgroundColor = '#00ff80';
        // event.target.classList.toggle('selected')
        // event.target.parentNode.style.display = 'none';
        console.log(event.target)
        console.log(event.target.getAttribute('index'))
     }

  render(){
    return (
        <QuestionContainer>
            {questions.map(question => 
                <QuestionContainerStyle>
                    <h1>{question.question}</h1>
                    {question.answers.map((answer, index) => 
                    <AnswersStyle key={index} index={index} onClick={this.changeColorOnClick}>{answer.content}</AnswersStyle>)}
                </QuestionContainerStyle>
                )}

      </QuestionContainer>
    )
}}


export default connect(null, {})(Questions);







