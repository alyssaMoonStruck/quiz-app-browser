import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import messages from '../AutoDismissAlert/messages'

// import moment from 'moment'
class Questions extends Component {
  constructor (props) {
    super(props)
    // setup our initial state
    this.state = {
      // we have zero Questions, until our API request has finished
      questions: [],
      user: props.user
    }
  }
  componentDidMount () {
    // Make a request for all of the Events
    const token = this.state.user ? `Token token=${this.state.user.token}` : ''
    axios({
      url: `${apiUrl}/userquestions`,
      method: 'GET',
      headers: {
        'Authorization': token
      }
    })
      .then(res => this.setState({ questions: res.data.questions }))
      .catch(console.log)
  }
deleteQuestion = id => {
  const { msgAlert } = this.props
  const token = this.state.user ? `Token token=${this.state.user.token}` : ''
  axios({
    url: `${apiUrl}/questions/${id}`,
    method: 'DELETE',
    headers: {
      'Authorization': token
    }
  })
    .then(() => this.componentDidMount())
    .then(() => msgAlert({
      heading: 'Question Deleted!',
      message: messages.deleteQuestionSuccess,
      variant: 'success'
    }))
    .catch(console.error)
}
render () {
  const questions = this.state.questions.map(question => (
    <div key={question._id} to={`/questions/${question._id}`}>
      <div className="card cardHover border-dark mb-4 card-body">
        <div className="card-header text-white bg-dark mb-4" >
          {question.question}
        </div>
        <div className="card-text mb-4">
          {question.correct}
        </div>
        <Link to={`/edit-question/${question._id}`}>
          <button className="btn btn">Edit</button>
        </Link>
        <button type='button' className="btn btn-danger" onClick={() => this.deleteQuestion(question._id)}>Delete</button>
      </div>
    </div>
  ))
  return (
    <div>
      <h4 className="m-4" >Your Created Questions</h4>
      {questions}
    </div>
  )
}
}
export default Questions
