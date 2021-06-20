import React from 'react'
import { connect } from 'react-redux'
import Logout from './Logout.js'
import {  NavLink } from 'react-router-dom'





const NavBar = ({ currentUser }) => {
    return (
        <div className="NavBar"> 
          { currentUser ? <h2>Wassup { currentUser.attributes.username }  </h2> : "" } 
          <NavLink to="/">|   Home   |</NavLink>
          { currentUser ? <NavLink to="/favorites">|   Your Favorites   |</NavLink> : "" }
          { currentUser ? <NavLink to="/albums/new">|   Add Album   |</NavLink> : "" }
          { currentUser ? <NavLink to="/reviews">|   See All Reviews   |</NavLink> : "" }
          { currentUser ? <Logout/> : "" }
        </div>
    )
}

const mapStateToProps = ({ currentUserReducer }) => {
    return {
      currentUser: currentUserReducer
    }
  }

export default connect(mapStateToProps)(NavBar)