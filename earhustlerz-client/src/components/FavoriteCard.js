import React from 'react'
import { Link } from 'react-router-dom'
import FavoriteForm from './FavoriteForm'


const FavoriteCard = ({favorite}) => {
    return (
        favorite ? 
                <div className="card">
                <img className="card-top" src={favorite.attributes.cover} alt="Card cap"></img>
                <div className="card-body">
                <h5 className="card-title"> <Link to={`/albums/${favorite.id}`}>{favorite.attributes.title}</Link> </h5>
                  <h6 className="card-artist">{favorite.attributes.artist}</h6>
                  <h6 className="card-genre">{favorite.attributes.genre}</h6>
                </div>
                <div className="card-body">
    <a href="#" className="card-link">TrackList</a>
    <a href="#" className="card-link">See Reviews</a>
    <br></br>
    <Link to={`/albums/${favorite.id}/edit`}>Edit</Link>

  </div>
                </div>  : <p>No Card</p>
    )
}



export default FavoriteCard