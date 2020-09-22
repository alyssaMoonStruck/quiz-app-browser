import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

const authenticatedOptions = (
  <Fragment>
    <Nav.Link exact href="#quiz">Play Quiz</Nav.Link>
    <Nav.Link href="#create-questions">Create Questions</Nav.Link>
    <Nav.Link href="#my-questions">My Questions</Nav.Link>
    <Nav.Link href="#change-password">Change Password</Nav.Link>
    <Nav.Link href="#sign-out">Sign Out</Nav.Link>
  </Fragment>
)

const unauthenticatedOptions = (
  <Fragment>
    <Nav.Link href="#sign-up">Sign Up</Nav.Link>
    <Nav.Link href="#sign-in">Sign In</Nav.Link>
    <Nav.Link href="#"></Nav.Link>
  </Fragment>
)

const Header = ({ user }) => (
  <Navbar className="navbar-dark bg-dark" expand="md">
    <Navbar.Brand href="#">
      Quiz App!
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        { user ? authenticatedOptions : unauthenticatedOptions }
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Header
