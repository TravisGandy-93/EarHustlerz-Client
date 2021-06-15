import React from 'react'
import { updateFavoriteForm } from '../actions/favoriteForm'
import { connect } from 'react-redux'


const FavoriteForm = ({formData, user_id, history, updateFavoriteForm, favorite, handleSubmit, editMode}) => {
  const {title, artist, cover, genre} = formData
    const handleChange = event =>{
        const { name, value } = event.target
        updateFavoriteForm(name, value)
    } 

    return (
        <div>
            <h3>create a new album</h3>
        <form onSubmit={event => {
           event.preventDefault()
          handleSubmit(formData)
            }}>
            <input
                placeholder="title"
                name="title"
                onChange={handleChange}
                defaultValue={favorite? favorite.attributes.title : title}
                autocomplete="off"
            />
            <input
                placeholder="artist"
                name="artist"
                onChange={handleChange}
                defaultValue={favorite? favorite.attributes.artist : artist}
                autocomplete="off"
            />
             <input
                placeholder="genre"
                name="genre"
                onChange={handleChange}
                defaultValue={favorite? favorite.attributes.genre : genre}
                autocomplete="off"
            />
            <input
                placeholder="cover image url"
                name="cover"
                onChange={handleChange}
                defaultValue={favorite? favorite.attributes.cover : cover} 
                autocomplete="off"
            />
            <input type="Submit" value={editMode ? "Update Album" : "Create Album" }/>
        </form>
        </div>
    )
};

const mapStateToProps = state => {
    const userId = state.currentUserReducer ? state.currentUserReducer.id : ""
    return {
        formData: state.favoriteForm,
        user_id: userId
    }
}

export default connect(mapStateToProps, { updateFavoriteForm })(FavoriteForm)


//t.string "title"
  //  t.string "cover"
  //  t.string "artist"
  //  t.string "genre"
  //  t.integer "user_id"