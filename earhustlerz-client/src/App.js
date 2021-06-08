import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import { getCurrentUser } from "./actions/currentUser.js"
import Login from './components/Login.js';
import Logout from './components/Logout.js'

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render(){
  return (
      this.props.currentUser ? <Logout/> : <Login/>
  );
  }
}

const mapStateToProps = ({ currentUserReducer }) => {
  return {
    currentUser: currentUserReducer
  }
}

export default connect(mapStateToProps, {getCurrentUser})(App);
