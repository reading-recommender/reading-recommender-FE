import React from "react";
import styled, {css} from 'styled-components'
import {connect} from "react-redux"
import bookshelf from '../bookshelf.jpg'
import {questions} from '../server'
import {handleSubmit, newQuiz} from '../actions'

const QuestionContainer = styled.div`
//background-image: url(${bookshelf});
background-size: cover;
width: 100%;
height: 100%;
display: flex;
justify-content: center;
flex-direction: column;
background-position: center;
padding: 20px;
width: 100vw;

overflow-y: scroll;
& h1 {
  color: #fff;
  text-shadow: 2px 2px 2px #000;  
  font-family: 'Bitter', serif;
  } 

  & .buttons {
      display: flex;
      flex-direction: column;
  }
  & p {
      background-color: #D7CEC7;
      color: red;
      padding: 10px;
      width: fit-content;
      margin: 0 auto;
      border-radius: 15px;
  }
`
const CardStyle = styled.div`
background-color: #D7CEC7;
border: 1px solid black;
color: #fff
padding: 1rem 2rem;
margin: 0 auto;
min-width: 50%;
max-width: 50%;
display: flex;
flex-wrap: wrap;
margin-bottom: 40px;
border-radius: 15px;
text-align: left;

${props =>
    props.book &&
    css`
      display: flex;
      flex-direction: column;
      & h1,h2 {
          color: #fff;
          text-shadow: 2px 2px 2px #000;
          font-family: 'Bitter', serif;
      }
      & h3 {
          color: #000;
      }
    `};

`
// const QuestionStyle = styled.div`
// display: flex;
// flex-wrap: wrap;
// width:100%;
// padding: 10px;
// font-size: 1.3rem;
// color:black;
// `
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

const Button = styled.button`
@keyframes pulse {
    0%   {transform: scale(1);}
    25%  {transform: scale(1.02);}
    50% {transform: scale(1.05);}
    75% {transform: scale(1.07);}
    100% {transform: scale(1.1);}
     
  }
   
  background-color: #C09F80;
  border: none;
  border-radius: 15px;
  color: #fff;
  padding: 2rem;
  margin: 0 auto;
  margin-top: 1rem;
  margin-bottom: 1rem;
  cursor: pointer;
  font-family: 'Bitter', serif;
  font-size: 1rem;
  width: 45%;
  &:hover {
    animation-name: pulse;
    animation-duration: .07s;
}  

${props =>
    props.secondary &&
    css`
      background-color: #76323F;
    `};
  
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
       const questions = Array.from(document.querySelectorAll('.questions'));
       questions.map(function(question) {
           const answers = Array.from(question.querySelectorAll('.answers'));
           //console.log(answers.parentElement)
           answers.map(function(answer) {
               if (e.target.parentNode === answer.parentNode) {
                   answer.style.backgroundColor = 'initial'
               }
           });
       })
        
      // console.log(answers)
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

     logOut = e => {
         localStorage.clear();
         this.props.history.push('/')
     }

     resetSubmissions = e => {
         this.setState({
             submissions: {
            'Q1': '',
            'Q2': '',
            'Q3': '',
            'Q4': '',
            'Q5': '',
            'Q6': ''
         }})
         return this.state.submissions
         
     }

     

  render(){
    return (
        <QuestionContainer>
        {!this.props.book &&
            <div>
            {questions.map((question, index) =>  
                <CardStyle className="questions" index={index} key={index}>
                    <h1>{question.question}</h1>
                    {question.answers.map((answer, index) => 
                    <AnswersStyle key={index} className="answers" 
                    onClick={(e) => {
                        this.answerIndex(index + 1);
                        this.changeColor(e);
                        this.submitAnswer( question.id, index + 1)
                     }}>{answer.content}</AnswersStyle>)}
                </CardStyle> 
                )} 
                <div className="buttons">
                     {this.props.submitFail && <p>You have not answered all the questions</p>}
                    <Button onClick={() => this.props.handleSubmit(this.state.submissions)}>Submit Answers</Button>  
                    <Button secondary onClick={this.logOut}>Log Out</Button>   
                </div>
            </div> }
                <div>
                     {this.props.isLoading && <h1>...Loading Results</h1>}
                     {this.props.book === false ? null : 
                        <CardStyle book>
                            <h1>{this.props.book.book}</h1>
                            <h2>By: {this.props.book.author}</h2>
                            <h3>{this.props.book.description}</h3>
                            <Button onClick={(e) => {
                                this.resetSubmissions();
                                this.props.newQuiz()
                             }}>Take the quiz again!</Button>
                        </CardStyle>
                    }
                </div>   
      </QuestionContainer>
    )
}}

const mapStateToProps = (state) => ({
    book: state.book,
    isLoading: state.isLoading,
    guest: state.guest,
    submitFail: state.submitFail

  });
export default connect(mapStateToProps, {handleSubmit,newQuiz})(Questions);