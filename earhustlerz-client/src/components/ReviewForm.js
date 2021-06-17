import React from 'react'
import { connect } from 'react-redux'
import { updateReviewForm, createReview } from '../actions/reviewForm.js'
// import { AutoComplete } from "@progress/kendo-react-dropdowns"



const ReviewForm = ({formData, user_id, history, updateReviewForm, createReview}) => {
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
        <h3>Review Albums</h3>
      <form onSubmit={handleSubmit}>
        <textarea placeholder="Write your honest review..." name="content" onChange={handleChange} rows="4" cols="50">
             
        </textarea>
        <br></br>
        <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Choose Album To Review
  </button>

</div>
        <br></br>
        <input type="Submit" value="Submit Review" />
      </form>
</div>
        )
}

const mapStateToProps = state => {
    const userId = state.currentUserReducer ? state.currentUserReducer.id : ""
    const {content, likes, dislikes} = state.reviewForm
    return {
       formData: state.reviewForm,
       user_id: userId
    }
}



export default connect(mapStateToProps,{ updateReviewForm, createReview })(ReviewForm)