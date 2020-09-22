import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'
import Quiz from '../../views/Quiz'
import AuthenticatedRoute from '../AuthenticatedRoute/AuthenticatedRoute'
import AutoDismissAlert from '../AutoDismissAlert/AutoDismissAlert'
import Header from '../Header/Header'
import SignUp from '../SignUp/SignUp'
import WelcomePage from '../WelcomePage/WelcomePage'
import SignIn from '../SignIn/SignIn'
import SignOut from '../SignOut/SignOut'
import ChangePassword from '../ChangePassword/ChangePassword'
import CreateQuestion from '../CreateQuestions/CreateQuestion'
import Questions from '../MyQuestions/MyQuestions'
import EditQuestion from '../EditQuestion/EditQuestion'

class App extends Component {
  constructor () {
    super()

    this.state = {
      user: null,
      msgAlerts: []
    }
  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  msgAlert = ({ heading, message, variant }) => {
    this.setState({ msgAlerts: [...this.state.msgAlerts, { heading, message, variant }] })
  }

  render () {
    const { msgAlerts, user } = this.state

    return (
      <Fragment>
        <Header user={user} />
        {msgAlerts.map((msgAlert, index) => (
          <AutoDismissAlert
            key={index}
            heading={msgAlert.heading}
            variant={msgAlert.variant}
            message={msgAlert.message}
          />
        ))}
        <main className="container">

          <Route exact path='/' render={() => (
            <WelcomePage setUser={this.setUser} />
          )} />
          <Route path='/sign-up' render={() => (
            <SignUp msgAlert={this.msgAlert} setUser={this.setUser} />
          )} />
          <Route path='/sign-in' render={() => (
            <SignIn msgAlert={this.msgAlert} setUser={this.setUser} />
          )} />
          <AuthenticatedRoute user={user} path='/sign-out' render={() => (
            <SignOut msgAlert={this.msgAlert} clearUser={this.clearUser} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/change-password' render={() => (
            <ChangePassword msgAlert={this.msgAlert} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/quiz' render={() => (
            <Quiz />
          )}/>
          <AuthenticatedRoute user={user} path='/my-questions' render={ () => (
            <Questions user={user} msgAlert={this.msgAlert}/>
          )} />
          <AuthenticatedRoute user={user} path='/create-questions' render={() => (
            <CreateQuestion msgAlert={this.msgAlert} user={user} />
          )} />
          <AuthenticatedRoute user={user} exact path='/edit-question/:id' render={props => (
            <EditQuestion msgAlert={this.msgAlert} user={user} {...props}/>
          )} />
        </main>
      </Fragment>
    )
  }
}

export default App
