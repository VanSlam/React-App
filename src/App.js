//Zach Van Slambrook
import React from 'react'
import { render } from 'react-dom'

/*const Pet = ({ name, animal, breed }) => {
  return React.createElement('div', {}, [
    React.createElement('h1', {}, name),
    React.createElement('h2', {}, animal),
    React.createElement('h3', {}, breed)
  ])
}*/
import Pet from './Pet'

/*const App = () => {
  return React.createElement('div', {}, [
    React.createElement('h1', {}, 'Adopt me!'),
    React.createElement(Pet, { name: 'Tucker', animal: 'dog', breed: 'Mut' }),
    React.createElement(Pet, { name: 'scout', animal: 'dog', breed: 'ausy' }),
    React.createElement(Pet, {
      name: 'freddy',
      animal: 'frog',
      breed: 'bullfrog'
    }),
    React.createElement(Pet, { name: 'tootles', animal: 'cat', breed: 'tabby' })
  ])
}*/

const App = () => {
  return (
    <div>
      <h1>Adopt me!</h1>
      <Pet name="Tucker" animal="Dog" breed="Mut" />
      <Pet name="Scout" animal="Dog" breed="Ausy" />
    </div>
  )
}

render(React.createElement(App), document.getElementById('root'))
