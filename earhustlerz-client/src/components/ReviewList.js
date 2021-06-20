import React from 'react'
import { connect } from 'react-redux'
import Review from './Review';
import FavoriteCard from './FavoriteCard';
import { Link } from 'react-router-dom'


const ReviewList = ({favorite}) => {
   
   const reviewCard = favorite.attributes.reviews.map(r=> <Review favorite={favorite} review={r} key={r.id} />)
   console.log(favorite.attributes);
       return (
           <div>
           <FavoriteCard favorite={favorite}/>
          {reviewCard ? reviewCard : null}
          <Link to={`/reviews`}>Add Review</Link>
          </div>
       )
}




export default connect(null)(ReviewList)