import React from 'react'
import { connect } from 'react-redux'
import Review from './Review';
import FavoriteCard from './FavoriteCard';
import { Link, withRouter } from 'react-router-dom'


const ReviewList = ({favorite, reviews, match}) => {
   
    const currentReviews = reviews.filter(r=>r.attributes.album.id == match.params.id)
   const reviewCard = currentReviews.map(r=> <Review review={r} key={r.id} />)
   console.log(currentReviews);
       return (
           <div>
           <FavoriteCard favorite={favorite}/>
          {reviewCard ? reviewCard : null}
          <Link to={`/reviews`}>Add Review</Link>
          </div>
       )
}

const mapStateToProps = ({review}) => {
    return {
        reviews: review
    }
}

export default connect(mapStateToProps)(withRouter(ReviewList))