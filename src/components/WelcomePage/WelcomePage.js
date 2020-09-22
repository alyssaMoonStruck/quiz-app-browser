import React from 'react'
// import { Link } from 'react-router-dom'

const Welcome = () => {
  const welcomeStyles = {
  }
  return (
    <div style={welcomeStyles}>
      <div>
        <div className="card bg-dark text-black m-4" style={{ width: '42rem', height: '42rem' }}>
          <img className="card-img" src="https://image.freepik.com/free-vector/orange-question-mark-background-with-text-space_1017-27394.jpg" alt="Card image"/>
          <div className="card-img-overlay">
            <h5 className="card-title m-4">Ready To Test Your Knowledge?</h5>
            <p className="card-text m-2">Get pumped and get ready to <br/> test your brain on <br/> everything from Actors to  Countries <br/> to Food! History Buff, Comic Nerd <br/> and Sports Fan, this is the <br/> game for you!</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Welcome
