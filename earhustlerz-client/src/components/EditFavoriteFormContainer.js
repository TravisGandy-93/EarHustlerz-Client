import React from 'react';
import FavoriteForm from './FavoriteForm'
import { updateFavorite } from '../actions/favorites'
import { connect } from 'react-redux'
import { setFavoriteForEdit } from '../actions/favoriteForm'

class EditFavoriteFormContainer extends React.Component { 
    
    componentDidMount(){
        this.props.favorite && this.props.setFavoriteForEdit(this.props.favorite)
    }

    componentDidUpdate(prevProps) {
        this.props.favorite && !prevProps.favorite && this.props.setFormDataForEdit(this.props.favorite)
      }

  handleSubmit = (formData) => {
    const { history, updateFavorite, favorite } = this.props
    updateFavorite({
      ...formData,
      id: favorite.id
    }, history)
  } 
  render() {
      const {history, favorite} = this.props
      const id = favorite ? favorite.id : null
      return <FavoriteForm editMode favorite={favorite.attributes} history={history} handleSubmit={this.handleSubmit} />
  }
};

export default connect(null, { updateFavorite, setFavoriteForEdit })(EditFavoriteFormContainer);