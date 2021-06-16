import React from 'react';
import FavoriteForm from './FavoriteForm'
import { updateFavorite, deleteFavorite } from '../actions/favorites'
import { connect } from 'react-redux'
import { setFavoriteForEdit } from '../actions/favoriteForm'

class EditFavoriteFormContainer extends React.Component { 
    
    componentDidMount(){
        this.props.favorite && this.props.setFavoriteForEdit(this.props.favorite)
    }

    componentDidUpdate(prevProps) {
        this.props.favorite && !prevProps.favorite && this.props.setFavoriteForEdit(this.props.favorite)
      }

  handleSubmit = (formData) => {
    const { history, updateFavorite, favorite } = this.props
    updateFavorite({
      ...formData,
      id: favorite.id
    }, history)
  } 
  render() {
      const {history, favorite, deleteFavorite} = this.props
      const id = favorite ? favorite.id : null
      return <>
            <FavoriteForm editMode favorite={favorite} history={history} handleSubmit={this.handleSubmit} />
            <br/>
            <button style={{color:'orange'}} onClick={() => deleteFavorite(id, history)}>Delete Album</button>
            </>
  }
};

export default connect(null, { updateFavorite, setFavoriteForEdit, deleteFavorite })(EditFavoriteFormContainer);