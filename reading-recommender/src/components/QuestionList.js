import React from "react";

import Questions from "./Questions";

const QuestionList = props => {
  return (
    <ul>
      {props.quizQuestions.map(question => {
        return <Questions 
          key={question.id} 
          question={question}
          />;
        
      })}
    </ul>
  );
};

export default QuestionList;
