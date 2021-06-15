import React from 'react'
import { Link } from 'react-router-dom'
import FavoriteForm from './FavoriteForm'


const FavoriteCard = ({favorite}) => {
    return (
        favorite ? 
                <div class="card">
                <img class="card-top" src={favorite.attributes.cover} alt="Card cap"></img>
                <div class="card-body">
                <h5 class="card-title"> <Link to={`/albums/${favorite.id}`}>{favorite.attributes.title}</Link> </h5>
                  <h6 class="card-artist">{favorite.attributes.artist}</h6>
                  <h6 class="card-genre">{favorite.attributes.genre}</h6>
                </div>
                <div class="card-body">
    <a href="#" class="card-link">TrackList</a>
    <a href="#" class="card-link">See Reviews</a>
    <br></br>
    <Link to={`/albums/${favorite.id}/edit`}>Edit</Link>

  </div>
                </div>  : <p>No Card</p>
    )
}



export default FavoriteCard