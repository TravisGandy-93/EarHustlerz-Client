import React from 'react';
import FavoriteForm from './FavoriteForm'
import { createFavorite } from '../actions/favorites'
import { connect } from 'react-redux'

const NewFavoriteFormContainer = ({ history, createFavorite }) => {

  const handleSubmit = (formData, userId) => {
    createFavorite({
      ...formData,
      userId
    }, history)
  } 
  return  <FavoriteForm history={history} handleSubmit={handleSubmit} />
};

export default connect(null, { createFavorite })(NewFavoriteFormContainer);