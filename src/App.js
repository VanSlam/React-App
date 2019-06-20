//Zach Van Slambrook

const Pet = ({ name, animal, breed }) => {
  return React.createElement('div', {}, [
    React.createElement('h1', {}, name),
    React.createElement('h2', {}, animal),
    React.createElement('h3', {}, breed)
  ])
}

const App = () => {
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
}

ReactDOM.render(React.createElement(App), document.getElementById('root'))
