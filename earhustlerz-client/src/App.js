import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import { getCurrentUser } from "./actions/currentUser.js"
import NavBar from './components/NavBar.js';
// import MainContainer from './components/MainContainer.js';
import { Route } from 'react-router-dom'
import Login from './components/Login';
import Logout from './components/Logout';
import Favorites from './components/Favorites';

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render(){
  return (
    <div className="App">
      <NavBar/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/logout" component={Logout}/>
      <Route exact path="/favorites" component={Favorites}/>
     {/* <MainContainer/> */}
    </div>
  );
  }
}



export default connect(null, {getCurrentUser})(App);
