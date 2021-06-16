import React from 'react'
import {connect} from 'react-redux'
import ReviewList from './ReviewList.js'
import ReviewForm from './ReviewForm.js'

const ReviewContainer = (props) => {
  //  const favorite = props.favorites.find(favorite => favorite.id === props.match.params.id)
    return (
        props.favorite ? <ReviewList/> : <ReviewForm/>
     
    )
}

const mapStateToProps = ({favorites}) => { 
    return {
          favorites
    }
}

export default connect(mapStateToProps)(ReviewContainer)