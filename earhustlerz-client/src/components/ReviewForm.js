import React, { useState } from 'react'
import { connect } from 'react-redux'
import { updateReviewForm, createReview } from '../actions/reviewForm.js'
import Select from "react-dropdown-select";
import { useHistory, withRouter } from 'react-router-dom';



// import { AutoComplete } from "@progress/kendo-react-dropdowns"




const ReviewForm = ({formData, user_id, updateReviewForm, createReview, favorites, review}) => {
    const favoriteList = favorites.map(f => f.attributes.title)
    const favoritesSorted = favoriteList.sort( (a, b) => a.localeCompare(b, 'fr', {ignorePunctuation: true}));
    const [value, setValue] = useState("")
    const data = favorites.map(f => f.attributes)
    const history = useHistory()

    const handleChange = event =>{
        console.log("in handle change");
        const { name, value } = event.target
        setValue(value);
        updateReviewForm(name, value)
    } 

    

    const handleSubmit = event => {
        event.preventDefault()
        createReview({
          ...formData,
          user_id
        }, history)
    } 

    const selectHandler = (e) =>{
        const selectedId = e.target.value;
        const selectedAlbumState = favorites.filter(f => f.id === selectedId)[0];
        setValue(selectedAlbumState);
        updateReviewForm("album_id", selectedAlbumState.id)
    }
     
        return (

    <div className="ReviewForm">
        <h3>Review Albums</h3>
      <form onSubmit={handleSubmit}>
          {/*
          
          TEXT AREA OF REVIEW FORM

          */}
        <textarea placeholder="Write your honest review..." name="content" onChange={handleChange} rows="4" cols="50">
             
        </textarea>
        <br></br>
        <div className="dropdown">
            <h5>
                 Choose Album To Review
            </h5> 
        </div>
         {/*
          
          SELECT TAG OF REVIEW FORM

          */}
          <div className="select">
            <select value={value?.id} onChange={(e) => selectHandler(e)} name={"album_id"} >
                    <option placeholder="Select the Album you're reviewing...">...</option>
                    {favorites.map(f => <option key={f.id} value={f.id}>"{f.attributes.title}" by {f.attributes.artist}</option>)}
            </select>
          </div>
        <br></br>
            <div style={{ display: "flex" }}> <input type="Submit" defaultValue="Submit Review" /> </div>
       
      </form>
</div>
        )
}

const mapStateToProps = state => {
    const userId = state.currentUserReducer ? state.currentUserReducer.id : ""
    const {content, likes, dislikes, album_id} = state.reviewForm
    return {
       formData: state.reviewForm,
       user_id: userId,
       favorites: state.favorites, 
    }
}



export default withRouter(connect(mapStateToProps,{ updateReviewForm, createReview })(ReviewForm))