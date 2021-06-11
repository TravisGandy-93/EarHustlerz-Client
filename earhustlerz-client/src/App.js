import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import { getCurrentUser } from "./actions/currentUser.js"
import NavBar from './components/NavBar.js';
// import MainContainer from './components/MainContainer.js';
import { Route, Switch } from 'react-router-dom'
import Login from './components/Login';
import Signup from './components/Signup.js';
import Favorites from './components/Favorites';
import Home from './components/Home'
import NewFavoriteForm from './components/NewFavoriteForm';


class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render(){
    const { loggedIn } = this.props
  return (
    <div className="App">
      <NavBar/>
      <Switch>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/signup" component={Signup}/>
      <Route exact path="/" render={(props)=> loggedIn? <Favorites {...props}/> : <Home {...props}/>}/>
      <Route exact path="/favorites" component={Favorites}/>
      <Route exact path="/albums/new" component={NewFavoriteForm}/>
      </Switch>
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
