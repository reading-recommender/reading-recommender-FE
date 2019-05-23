import React from "react";


const Answer = props => {
  return (
    <div>
      <input
            type="radio"
            name="answer"
            value={props.answer}
            // onChange={}
          />
      {props.answer}
    </div>
  );
};

export default Answer;