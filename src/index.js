import React from 'react'
import ReactDOM from 'react-dom'
import './components/index.scss'

import App from './components/App/App'
import { HashRouter } from 'react-router-dom'

ReactDOM.render(<HashRouter><App /></HashRouter>, document.getElementById('root'))
