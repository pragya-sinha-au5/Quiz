import React from "react";
import celeb from '../celeb.jpg'
import low from '../low.jpg'

const Result = ({score,playAgain}) => (
  <div className="score-board">
    {score ===5 ? <div className="scoreg "><img src={celeb} alt="pic" className="img2 "/><br/>  congratulations!!! You scored {score} / 5 correct answers Good luck</div>
    :<p className="score"><img src= {low} alt="pic" className="img "/> <br/>oh noo!! You scored {score} / 5 correct answer, Better luck next time </p>}
    <button className="playBtn btn btn-outline-warning" onClick={playAgain}>Wanna Play again!</button>
  </div>
  
);

export default Result;
