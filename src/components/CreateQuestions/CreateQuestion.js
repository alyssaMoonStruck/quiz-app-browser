import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import QuestionForm from '../QuestionForm/QuestionForm'

import apiUrl from '../../apiConfig'
import axios from 'axios'
import messages from '../AutoDismissAlert/messages'
// import messages from '../AutoDismissAlert/messages'

class CreateQuestion extends Component {
  /* Comes from Component or React.Component */
  // This happends before anything
  constructor (props) {
    super(props)
    this.state = {
      question: {
        question: '',
        answers1: '',
        answers2: '',
        answers3: '',
        answers4: '',
        correct: ''
      },
      created: false,
      user: props.user
    }
  }

  /* Life cycle event */
  componentDidMount () {
    // this should be an api, if you need to make one
    // Safe space to manipulate state using:
    //    this.setState({vairableName: whatever})
  }

  /* Actions */
  // You define these
  handleChange = question => {
    question.persist()
    this.setState(prevState => {
      const updatedField = { [question.target.name]: question.target.value }
      const editedQuestions = Object.assign({}, prevState.question, updatedField)
      return { question: editedQuestions }
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    const { msgAlert } = this.props
    const { question } = this.state
    const model = {
      question: question.question,
      answers: [question.answers1, question.answers2, question.answers3, question.answers4],
      correct: question.correct
    }
    axios({
      url: `${apiUrl}/questions`,
      method: 'POST',

      data: { question: model },
      headers: {
        'Authorization': `Token token=${this.state.user.token}`
      }
    })
      .then(res => this.setState({ created: true }))
      .then(() => msgAlert({
        heading: 'Question created!',
        message: messages.creatQuestionSuccess,
        variant: 'success'
      }))
      .catch(() => {
        msgAlert({
          heading: 'Question Failed To Create!',
          message: messages.creatQuestionFailure,
          variant: 'danger'
        })
      })
  }

  /* Life cycle event */
  render () {
    // this is your area to do stuff
    // *THAAT DOES NOT MANIPULATE STATE*

    const { question, created } = this.state
    const { handleChange, handleSubmit } = this

    if (created) {
      return <Redirect to='/my-questions' />
    }

    return (
      <QuestionForm
        question={question}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        cancelPath='/'
      />
    )
  }
}

export default CreateQuestion
