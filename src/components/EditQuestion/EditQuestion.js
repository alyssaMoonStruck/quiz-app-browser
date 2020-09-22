import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import QuestionForm from '../QuestionForm/QuestionForm'
import messages from '../AutoDismissAlert/messages'

class EditQuestion extends Component {
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
      updated: false,
      user: props.user
    }
  }
  componentDidMount () {
    axios({
      url: `${apiUrl}/questions/${this.props.match.params.id}`,
      method: 'GET',
      headers: {
        'Authorization': `Token token=${this.state.user.token}`
      }
    })
      .then(res => {
        const q = res.data.question
        const model = {
          question: q.question,
          answers1: q.answers[0],
          answers2: q.answers[1],
          answers3: q.answers[2],
          answers4: q.answers[3],
          correct: q.correct
        }
        this.setState({ question: model })
      })
      .catch(console.error)
  }
  handleChange = event => {
    event.persist()
    this.setState(prevState => {
      const updatedField = { [event.target.name]: event.target.value }
      const editedQuestions = Object.assign({}, prevState.question, updatedField)
      return { question: editedQuestions }
    })
  }
  handleSubmit = event => {
    event.preventDefault()
    const { msgAlert } = this.props
    const { question } = this.state
    const model = {
      question: question.question,
      answers: [question.answers1, question.answers2, question.answers3, question.answers4],
      correct: question.correct
    }
    axios({
      url: `${apiUrl}/questions/${this.props.match.params.id}`,
      method: 'PATCH',
      data: { question: model },
      headers: {
        'Authorization': `Token token=${this.state.user.token}`
      }
    })
      .then(() => this.setState({ updated: true }))
      .then(() => msgAlert({
        heading: 'Question edited!',
        message: messages.editQuestionSuccess,
        variant: 'success'
      }))
      .catch(() =>
        msgAlert({
          heading: 'Edit Question Failed!',
          message: messages.editQuestionFailure,
          variant: 'danger'
        })
      )
  }
  render () {
    const { question, updated } = this.state
    const { handleChange, handleSubmit } = this
    if (updated) {
      return <Redirect to='/my-questions'/>
    }
    return (
      <QuestionForm
        question={question}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        cancelPath={`/questions/${this.props.match.params.id}`}
      />
    )
  }
}
export default EditQuestion
