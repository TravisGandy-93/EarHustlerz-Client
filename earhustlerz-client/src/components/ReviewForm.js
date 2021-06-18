import React from 'react'
import { connect } from 'react-redux'
import { updateReviewForm, createReview } from '../actions/reviewForm.js'


// import { AutoComplete } from "@progress/kendo-react-dropdowns"




const ReviewForm = ({formData, user_id, history, updateReviewForm, createReview, favorites}) => {
    const favoriteList = favorites.map(f => f.attributes.title)
    const favoritesSorted = favoriteList.sort( (a, b) => a.localeCompare(b, 'fr', {ignorePunctuation: true}));
    const [value, setValue] = React.useState();
    const data = favorites.map(f => f.attributes)

    const handleChange = event =>{
        console.log("in handle change");
        const { name, value } = event.target
        setValue(value);
        updateReviewForm(name, value)
    } 

    

    const handleSubmit = (formData, user_id, album_id) => {
        createReview({
          ...formData,
          user_id,
          album_id
        }, history)
      } 
     
        return (

    <div className="ReviewForm">
        <h3>Review Albums</h3>
      <form onSubmit={handleSubmit}>
        <textarea placeholder="Write your honest review..." name="content" onChange={handleChange} rows="4" cols="50">
             
        </textarea>
        <br></br>
        <div className="dropdown">
            <h5>
                 Choose Album To Review
            </h5> 
        </div>

        <br></br>
            <div style={{ display: "flex" }}> <input type="Submit" defaultValue="Submit Review" /> </div>
       
      </form>
</div>
        )
}

const mapStateToProps = state => {
    const userId = state.currentUserReducer ? state.currentUserReducer.id : ""
    const {content, likes, dislikes} = state.reviewForm
    return {
       formData: state.reviewForm,
       user_id: userId,
       favorites: state.favorites, 
       
    
    }
}



export default connect(mapStateToProps,{ updateReviewForm, createReview })(ReviewForm)