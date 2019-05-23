import React from "react";
import Answer from "./Answer";
import styled, { css } from 'styled-components'
// import { connect } from "http2";
import { fetchingQuestions } from "../actions"
import { connect } from "react-redux"
import bookshelf from '../bookshelf.jpg'

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
padding: 10px;
font-size: 1.1rem;
color:black;
`


class Questions extends React.Component {
    componentDidMount() {
        this.props.fetchingQuestions();
    }
    render() {
        return (
            <QuestionContainer>
                {this.props.quizQuestions.map(item =>
                    <QuestionContainerStyle>
                        <QuestionStyle>
                            <strong>Question: </strong>{item.question}
                        </QuestionStyle>
                {item.answers.map(answer =>
                    <AnswersStyle>
                    <div>{answer.content}</div>
                    </AnswersStyle>
                )}
                    </QuestionContainerStyle>
                )}

            </QuestionContainer>
        )
    }
}
const mapStateToProps = ({ quizQuestions }) => ({
    quizQuestions
})
export default connect(mapStateToProps, { fetchingQuestions })(Questions);
// export default Questions;

{/* {this.props.fetchingQuestions.answers.map(answer => {
               return <Answer key={answer.content} answer={answer.content}/>})} */}

            //    <div><strong>Answers: {console.log(item.answers)}</strong></div>