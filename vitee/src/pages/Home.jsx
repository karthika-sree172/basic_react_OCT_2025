import React from 'react'
import Parent from '../components/Parent'
import State from '../hooks/State'
import Profile from '../components/Profile'
import Form from '../hooks/Form'

const Home = () => {
  return (
    <div>
      <Form/>
      <Parent/>
      <State/>
      <Profile name ="XYZ" and age={33} skill ={["python","html","css","mern"]}/>
    </div>
  )
}

export default Home