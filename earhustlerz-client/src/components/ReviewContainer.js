import React from 'react'
import {connect} from 'react-redux'
import ReviewsList from './ReviewsList.js'
import ReviewsForm from './ReviewsForm.js'

const ReviewContainer = ({favorite}) => {

    return (
        favorite ? <ReviewsList/> : <ReviewsForm/>
     
    )
}

const mapStateToProps = ({favorites}) => {
    return {
        favorites
    }
}

export default connect(mapStateToProps)(ReviewContainer)