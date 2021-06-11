import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import usersReducer from './reducers/users.js'
import currentUserReducer from './reducers/currentUser.js'
import loginForm from './reducers/loginForm.js'
import favorites from './reducers/favorites.js'
import signupForm from './reducers/signupForm.js'
import newFavoriteForm from './reducers/newFavoriteForm'

const reducer = combineReducers({
    user: usersReducer,
    currentUserReducer,
    loginForm,
    favorites,
    signupForm,
    newFavoriteForm
  })

  const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  
  const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

  export default store