import React from 'react'
import { connect } from 'react-redux'
import { updateReviewForm, createReview } from '../actions/reviewForm.js'

const ReviewForm = ({formData, user_id, history, updateReviewForm}) => {
    const handleChange = event =>{
        console.log("in handle change");
        const { name, value } = event.target
        updateReviewForm(name, value)
    } 

    const handleSubmit = (formData, user_id) => {
        createReview({
          ...formData,
          user_id
        }, history)
      } 

        return (

    <div className="ReviewForm">
        Yerrrrrrrr. I am a ReviewForm.
      <form onSubmit={handleSubmit}>
        <textarea placeholder="Write your honest review..." name="content" onChange={handleChange} rows="4" cols="50">
             
        </textarea>
      </form>
    </div>
        )
}

const mapStateToProps = state => {
    const {content, likes, dislikes} = state.reviewForm
    return {
       content,
       likes,
       dislikes
    }
}



export default connect(mapStateToProps,{ updateReviewForm })(ReviewForm)