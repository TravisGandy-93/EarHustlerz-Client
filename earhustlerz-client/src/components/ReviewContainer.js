import React from 'react'
import {connect} from 'react-redux'
import ReviewList from './ReviewList.js'
import ReviewForm from './ReviewForm.js'

const ReviewContainer = ({favorite, review}) => {
 // const favorite =(.favorites.find(favorite => favorite.id ===(.match.params.id)
    return (
     favorite.attributes.reviews.length ? <ReviewList/> : <ReviewForm/>
     
    )
}

const mapStateToProps = ({favorites}) => { 
    return {
          favorites,
    
    }
}

export default connect(mapStateToProps)(ReviewContainer)