import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import { getCurrentUser } from "./actions/currentUser.js"
import NavBar from './components/NavBar.js';
// import MainContainer from './components/MainContainer.js';
import { Route } from 'react-router-dom'
import Login from './components/Login';
import Signup from './components/Signup.js';
import Favorites from './components/Favorites';
import Home from './components/Home'

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render(){
    const { loggedIn } = this.props
  return (
    <div className="App">
      <NavBar/>
      <Route exact path="/" render={()=> loggedIn? <Favorites/> : <Home/>}/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/signup" component={Signup}/>
      <Route exact path="/favorites" component={Favorites}/>
     {/* <MainContainer/> */}
    </div>
  );
  }
}

const mapStateToProps = state => {
  return ({
    loggedIn: !!state.currentUserReducer
  })
}


export default connect(mapStateToProps, {getCurrentUser})(App);
