import React from 'react'
import { updateNewFavoriteForm } from '../actions/newFavoriteForm'
import { connect } from 'react-redux'

const NewFavoriteForm = ({title, artist, cover, history, updateNewFavoriteForm}) => {

    const handleChange = event =>{
        const { name, value } = event.target
        updateNewFavoriteForm(name, value)
    }

    const handleSubmit = e => {
        e.preventDefault()
    }

    return (
        <div>
            <h3>create a new album</h3>
        <form onSubmit={handleSubmit}>
            <input
                placeholder="title"
                name="title"
                onChange={handleChange}
                value={title}
            />
            <input
                placeholder="artist"
                name="artist"
                onChange={handleChange}
                value={artist}
            />
            <input
                placeholder="cover image url"
                name="cover"
                onChange={handleChange}
                value={cover}
            />
            <input type="Submit" value="Create Album"/>
        </form>
        </div>
    )
};

const mapStateToProps = state => {
    const {title, artist, cover} = state.newFavoriteForm
    return {
        title,
        artist,
        cover
    }
}

export default connect(mapStateToProps, { updateNewFavoriteForm })(NewFavoriteForm)


//t.string "title"
  //  t.string "cover"
  //  t.string "artist"
  //  t.string "genre"
  //  t.integer "user_id"