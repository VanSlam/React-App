//Zach Van Slambrook
import React from 'react'
import { render } from 'react-dom'
import SearchParams from './SearchParam'
import Pet from './Pet'
import { Router } from '@reach/router'
import Details from './Details'

const App = () => {
  return (
    <div>
      <h1>Adopt me!</h1>
      <Router>
        <SearchParams path="/" />
        <Details path="/details/:id" />
      </Router>
    </div>
  )
}

render(React.createElement(App), document.getElementById('root'))
