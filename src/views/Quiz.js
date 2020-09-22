import React from 'react'
import quiz from '../quiz/index'
import QuestionBox from '../components/QuestionBox'
import Result from '../components/Results'

class Quiz extends React.Component {
    state = {
      questionBank: [],
      score: 0,
      responses: 0
    }
    getQuestions = () => {
      quiz().then(questions => {
        this.setState({
          questionBank: questions
        })
      })
    }
    computeAnswer = (answer, correctAnswer) => {
      if (answer === correctAnswer) {
        this.setState({
          score: this.state.score + 1
        })
      }
      this.setState({
        responses: this.state.responses + 1
      })
    }
    playAgain = () => {
      this.getQuestions()
      this.setState({
        score: 0,
        responses: 0
      })
    }
    componentDidMount () {
      this.getQuestions()
    }
    render () {
      return (
        <div className="container">
          <div className="title">Lets Play!</div>
          {this.state.questionBank.length > 0 && this.state.responses < 3 &&
            this.state.questionBank.map(
              ({ question, answers, correct, questionId }) => (
                <QuestionBox
                  question={question}
                  options={answers}
                  key={questionId}
                  selected={selectedAnswer => this.computeAnswer(selectedAnswer, correct)}
                />
              )
            )}
          {this.state.responses === 3 ? (
            <Result score={this.state.score} playAgain={this.playAgain} />
          ) : null}
        </div>
      )
    }
}

export default Quiz
