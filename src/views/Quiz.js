import React, { useState, useEffect } from 'react'
import { quiz } from '../api/quiz'
import QuestionBox from '../components/QuestionBox'
import Result from '../components/Results'

const numOfQuestions = 5

function Quiz ({ user }) {
  const [questions, setQuestsions] = useState([])

  const loadQuestions = () => {
    quiz(user, numOfQuestions).then(res => setQuestsions(res.data.questions))
  }

  useEffect(loadQuestions, [])

  const setResponse = (response, index) => {
    const all = [...questions]
    const theOne = { ...all[index] }
    theOne.response = response
    all[index] = theOne
    setQuestsions(all)
  }

  if (questions.filter(s => s.response !== undefined).length !== numOfQuestions) {
    return (
      <div className='container'>
        <div className='title'>Lets Play!</div>
        {questions.map(
          (q, index) => (
            <QuestionBox
              key={index}
              question={q}
              selected={ res => setResponse(res, index)}
            />
          )
        )}
      </div>
    )
  } else {
    const score = questions.filter(s => s.response === s.correct).length
    return (
      <div className='container'>
        <div className='title'>Lets Play!</div>
        <Result
          score={score}
          playAgain={loadQuestions}
          finish={numOfQuestions}
        />
      </div>
    )
  }
}

export default Quiz
