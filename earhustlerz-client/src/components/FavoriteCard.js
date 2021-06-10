import React from 'react'

const FavoriteCard = ({favorite}) => {
    return (
        favorite ? 
                <div>
                  <h3>{favorite.attributes.title}</h3>
                  <p>{favorite.attributes.artist}</p>
                  <p>{favorite.attributes.genre}</p>
                </div>  : <p>No Card</p>
    )
}



export default FavoriteCard