import React from 'react'

const QuestionBox = ({ question, selected }) => {
  return (
    <div className='questionBox'>
      <div className='question'>{question.question}</div>
      {question.answers.map((text, index) => (
        <button
          key={index}
          className={`answerBtn btn ${question.response !== text ? 'btn-outline-danger' : 'btn-danger'}`}
          onClick={e => {
            selected(text)
          }}
        >
          {text}
        </button>
      ))}
    </div>
  )
}

export default QuestionBox
