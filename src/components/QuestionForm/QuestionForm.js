import React from 'react'
import { Link } from 'react-router-dom'

import Form from 'react-bootstrap/Form'

const QuestionForm = ({ question, handleSubmit, handleChange, cancelPath }) => {
  return (
    <div className="row2">
      <div className="col-sm-10 col-md-8 mx-auto mt-5">
        <h3>Create Questions</h3>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="question">
            <Form.Label>Question</Form.Label>
            <Form.Control
              required
              placeholder="Enter a Question"
              value={question.question}
              name="question"
              onChange={handleChange}
            />

            <Form.Label>Answer 1</Form.Label>
            <Form.Control
              placeholder="Enter First Possible Answer"
              value={question.answers1}
              name="answers1"
              onChange={handleChange}
            />

            <Form.Label>Answer 2</Form.Label>
            <Form.Control
              placeholder="Enter Second Possible Answerr"
              value={question.answers2}
              name="answers2"
              onChange={handleChange}
            />

            <Form.Label>Answer 3</Form.Label>
            <Form.Control
              placeholder="Enter Third Possible Answer"
              value={question.answers3}
              name="answers3"
              onChange={handleChange}
            />

            <Form.Label>Answer 4</Form.Label>
            <Form.Control
              placeholder="Enter Fourth Possible Answer"
              value={question.answers4}
              name="answers4"
              onChange={handleChange}
            />
            <Form.Label>Correct Answer</Form.Label>
            <Form.Control
              placeholder="Enter the Correct Answer"
              value={question.correct}
              name="correct"
              onChange={handleChange}
            />
          </Form.Group>
          <button className="btn btn-outline-success m-2" type="submit">
            Submit
          </button>
          <Link to={cancelPath}>
            <button className="btn btn-outline-danger m-2">Cancel</button>
          </Link>
        </Form>
      </div>
    </div>
  )
}

export default QuestionForm
