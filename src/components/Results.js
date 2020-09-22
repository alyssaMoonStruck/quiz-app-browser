import React from 'react'

const Result = ({ score, playAgain, finish }) => (
  <div className='score-board text-center'>
    <div className='score'>You scored {score} / {finish} correct answers!</div>
    <button className='playBtn' onClick={playAgain}>
        Play Again!
    </button>
  </div>
)

export default Result
