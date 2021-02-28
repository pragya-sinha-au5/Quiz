import React, {useState} from "react";
import {Link , Route} from 'react-router-dom';

function refreshPage() {
  window.location.reload(false);
}

const QuestionBox = ({question, options, selected }) => {
	
  const [answer, setAnswer ] = useState(options);
  return (
  
    
   
	<div>
    <div className="questionBox">
      <div className="question "><li>{question}</li></div>
	{
	   answer.map((text, index) => (
        <button 
          key={index}
          className="answerBtn"
          onClick={() => {
			    setAnswer([text])
            selected(text);
          }}
        >
          {text}
        </button>
   ))}
	  
    </div>
	</div>
  
  
  );
};

export default QuestionBox;