import React from 'react'

const Result = ({ score, playAgain, finish }) => (
  <div className='score-board text-center'>
    <div className='score'>You answered {score} out of {finish} correctly!!</div>
    <button className='playBtn' onClick={playAgain}>
        Wanna Play Again?
    </button>
  </div>
)

export default Result
