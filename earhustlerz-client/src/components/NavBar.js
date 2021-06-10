import React from 'react'
import { connect } from 'react-redux'
import Login from './Login.js';
import Logout from './Logout.js'


const NavBar = ({ currentUser }) => {
    return (
        <div className="NavBar"> 
          { currentUser ? <h2>Wassup { currentUser.attributes.username }</h2> : "" } 
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