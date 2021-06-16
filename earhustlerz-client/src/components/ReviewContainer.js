import React from 'react'
import {connect} from 'react-redux'
// import ReviewsList from './ReviewsList.js'
import ReviewsForm from './ReviewsForm.js'

const ReviewContainer = ({favorite}) => {

    return (
        favorite ? <p>idk</p> : <ReviewsForm/>
     
    )
}

const mapStateToProps = ({favorite}) => { 
    return {
        favorite
    }
}

export default connect(mapStateToProps)(ReviewContainer)