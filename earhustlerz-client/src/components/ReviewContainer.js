import React from 'react'
import {connect} from 'react-redux'
// import ReviewsList from './ReviewsList.js'
import ReviewsForm from './ReviewsForm.js'

const ReviewContainer = (favorite) => {
  //  const favorite = props.favorites.find(favorite => favorite.id === props.match.params.id)
    return (
        favorite ? <p>idk</p> : <ReviewsForm/>
     
    )
}

const mapStateToProps = ({favorites}) => { 
    return {
          favorites
    }
}

export default connect(mapStateToProps)(ReviewContainer)