import React from 'react'

const NewFavoriteForm = ({}) => {
    const handleChange=()=>{}
    return (
        <form>
            <input
                name="title"
                onChange={handleChange}
                value={"title"}
            />
            <input
                name="artist"
                onChange={handleChange}
                value={"artist"}
            />
            <input
                name="cover"
                onChange={handleChange}
                value={"cover"}
            />
        </form>
    )
}

export default NewFavoriteForm


//t.string "title"
  //  t.string "cover"
  //  t.string "artist"
  //  t.string "genre"
  //  t.integer "user_id"