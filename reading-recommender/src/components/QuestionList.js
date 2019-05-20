import React from "react";

import Questions from "./Questions";

const QuestionList = props => {
  return (
    <ul>
      {props.questions.map(quizQuestions => {
        return <Questions key={quizQuestions.question} question={quizQuestions} />;
        
      })}
    </ul>
  );
};

export default QuestionList;
