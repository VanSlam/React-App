import React from 'react'

//default values to not crash app
const Pet = ({ name, animal = 'NA', breed = 'NA' }) => {
  return React.createElement('div', {}, [
    React.createElement('h1', {}, name),
    React.createElement('h2', {}, animal),
    React.createElement('h2', {}, breed)
  ])
}

export default Pet
