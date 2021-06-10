import React from 'react'
import Login from './Login'
import Signup from './Signup'
import { Link } from 'react-router-dom'


const Home = () => {
    return (
        <div>
        <h2> Welcome to EarHustlerz, please  <Link to="/signup">Sign Up</Link>
         OR
         <Link to="/login"> Log In </Link> </h2>
        </div>
    )
}

export default Home
