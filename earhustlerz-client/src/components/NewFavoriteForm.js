import React from 'react'
import { updateNewFavoriteForm } from '../actions/newFavoriteForm'
import { connect } from 'react-redux'
import { createFavorite } from '../actions/favorites'

const NewFavoriteForm = ({formData, userId, history, updateNewFavoriteForm, createFavorite}) => {
  const {title, artist, cover} = formData
    const handleChange = event =>{
        const { name, value } = event.target
        updateNewFavoriteForm(name, value)
    }

    const handleSubmit = event => {
        event.preventDefault()
        createFavorite({...formData,
        userId}, history)
    }

    return (
        <div>
            <h3>create a new album</h3>
        <form onSubmit={handleSubmit}>
            <input
                placeholder="title"
                name="title"
                onChange={handleChange}
                defaultValue={title}
            />
            <input
                placeholder="artist"
                name="artist"
                onChange={handleChange}
                defaultValue={artist}
            />
            <input
                placeholder="cover image url"
                name="cover"
                onChange={handleChange}
                defaultValue={cover}
            />
            <input type="Submit" defaultValue="Submit"/>
        </form>
        </div>
    )
};

const mapStateToProps = state => {
    const userId = state.currentUserReducer ? state.currentUserReducer.id : ""
    return {
        formData: state.newFavoriteForm,
        user_id: userId
    }
}

export default connect(mapStateToProps, { updateNewFavoriteForm, createFavorite })(NewFavoriteForm)


//t.string "title"
  //  t.string "cover"
  //  t.string "artist"
  //  t.string "genre"
  //  t.integer "user_id"