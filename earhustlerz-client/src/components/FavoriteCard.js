import React from 'react'
import { Link } from 'react-router-dom'



const FavoriteCard = ({favorite}) => {
    return (
        favorite ? 
        <div class="container">
        <div class="row">
        <div class="col-md-6-offset-3 col-center">
                <div className="card text-white bg-dark mb-3" style={{width: "50rem"}}>
                 
                <img className="card-top" src={favorite.attributes.cover} alt="Card cap" ></img>
              
                <div className="card-body">
                <h5 className="card-title"> <Link to={`/albums/${favorite.id}`}>{favorite.attributes.title}</Link> </h5>
                  <h6 className="card-artist">{favorite.attributes.artist}</h6>
                  <h6 className="card-genre">{favorite.attributes.genre}</h6>
                </div>
                <div className="card-body">
                  <span><Link to={`/reviews/${favorite.id}`}>See {favorite.attributes.title}'s Reviews</Link></span>
                <br></br>
                <Link to={`/albums/${favorite.id}/edit`}>Edit</Link>

    </div>
                </div>
                </div>
        </div>
        </div>  : <p>No Card</p>
    )
}



export default FavoriteCard