import React from 'react'
import Login from './Login'
import { Link } from 'react-router-dom'


const Home = () => {
    return (
        <div>
        <h2> Welcome to EarHustlerz, please  <Link to="/signup">Sign Up</Link>
         <br></br>
         OR
         </h2>
         <Login/>
        </div>
    )
}

export default Home
