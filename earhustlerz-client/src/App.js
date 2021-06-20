import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import { getCurrentUser } from "./actions/currentUser.js"
import NavBar from './components/NavBar.js';
// import MainContainer from './components/MainContainer.js';
import { Route, Switch, withRouter } from 'react-router-dom'
import Login from './components/Login';
import Signup from './components/Signup.js';
import Favorites from './components/Favorites';
import Home from './components/Home'
import FavoriteCard from './components/FavoriteCard';
import NewFavoriteFormContainer from './components/NewFavoriteFormContainer';
import EditFavoriteFormContainer from './components/EditFavoriteFormContainer';
import { setFavoriteForEdit } from './actions/favoriteForm'
import ReviewContainer from './components/ReviewContainer';
import ReviewList from './components/ReviewList';


class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render(){
    const { loggedIn, favorites, currentUser } = this.props
  return (
    <div className="App">
      <NavBar/>
      
      <Switch>
      <Route exact path="/login" component={Login}/>

      <Route exact path="/signup" component={Signup}/>

      <Route exact path="/" render={(props)=> loggedIn? <Favorites {...props}/> : <Home {...props}/>}/>
     
      <Route exact path="/albums/new" component={NewFavoriteFormContainer}/>
      
      <Route exact path="/favorites" render={(props) => {
        const userFavorites = favorites.filter(favorite => favorite.attributes.user_id == currentUser.id)
        return userFavorites.map((favorite) => <FavoriteCard favorite={favorite} {...props}/>)
      }}/>
      
      <Route exact path="/albums/:id" render={(props) => {
        const favorite = favorites.find(favorite => favorite.id === props.match.params.id)
        return <FavoriteCard favorite={favorite} {...props}/>
      }}/>
       
       <Route exact path="/albums/:id/edit" render={props => {
         const favorite = favorites.find(favorite => favorite.id === props.match.params.id)
        return <EditFavoriteFormContainer favorite={favorite} {...props}/>
      }}/>

      <Route exact path="/albums/:id/reviews" render={props => {
      const favorite = favorites.find(favorite => favorite.id === props.match.params.id)
        return <ReviewContainer favorite={favorite} {...props}/>
      }}/>

      <Route exact path="/reviews/:id" render={props => {
        const favorite = favorites.find(f=>f.id === props.match.params.id)
        return <ReviewList favorite={favorite}/>}}/>
      </Switch> 
     {/* <MainContainer/> */} 
    </div>
  );
  }
}

const mapStateToProps = state => {
  return ({
    loggedIn: !!state.currentUserReducer,
    favorites: state.favorites,
    currentUser: state.currentUserReducer
  })
}


export default withRouter(connect(mapStateToProps, {getCurrentUser, setFavoriteForEdit})(App));
