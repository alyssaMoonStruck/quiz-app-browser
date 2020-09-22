import React, { useState } from 'react'

const QuestionBox = ({ question, options, selected }) => {
  const [choices, setChoices] = useState(options)
  return (
    <div className='questionBox'>
      <div className='question'>{question}</div>
      {choices.map((text, index) => (
        <button
          key={index}
          className='answerBtn btn btn-outline-danger'
          onClick={e => {
            setChoices([text])
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
