import React from 'react'
import { connect } from 'react-redux'
import Logout from './Logout.js'
import {  NavLink } from 'react-router-dom'





const NavBar = ({ currentUser }) => {
    return (
      <nav class="navbar navbar-light bg-success">
        <div className="NavBar col-md-6-offset-3 col-center"> 
          { currentUser ? <h2> Wassup { currentUser.attributes.username }  </h2> : "" } 
          <NavLink to="/">|   Home   |</NavLink>
          { currentUser ? <NavLink to="/favorites">|   Your Favorites   |</NavLink> : "" }
          { currentUser ? <NavLink to="/albums/new">|   Add Album   |</NavLink> : "" }
          { currentUser ? <NavLink to="/reviews">|   Add Review   |</NavLink> : "" } 
          { currentUser ? <Logout/> : "" }
        </div>
      <h4 class="col-md-6-offset-3 col-center">Here at EarHustlerz you can be a voice, an eye, or an ear to the community... The mastery is in being all three..</h4>  
      </nav>

    )
}

const mapStateToProps = ({ currentUserReducer }) => {
    return {
      currentUser: currentUserReducer
    }
  }

export default connect(mapStateToProps)(NavBar)