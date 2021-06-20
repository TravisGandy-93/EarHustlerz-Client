import React from 'react'
import {connect} from 'react-redux'
import ReviewList from './ReviewList.js'
import ReviewForm from './ReviewForm.js'


const ReviewContainer = ({favorite, props}) => {
 // const favorite =(.favorites.find(favorite => favorite.id ===(.match.params.id)
 console.log();
    return (
     favorite.attributes.reviews.length ? <ReviewList favorite={favorite} {...props}/> : <ReviewForm/>
     
    )
}

const mapStateToProps = ({favorites}) => { 
    
    return {
          favorites,
    }
}

export default connect(mapStateToProps)(ReviewContainer)