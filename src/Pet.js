import React from 'react'

//default values to not crash app
const Pet = ({ name, animal = 'None provided', breed = 'None provided' }) => {
  return (
    <div>
      <h1>Name: {name}</h1>
      <h2>Animal: {animal}</h2>
      <h3>Breed: {breed}</h3>
    </div>
  )
}

export default Pet
