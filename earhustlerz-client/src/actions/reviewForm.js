import { addReview } from "./review";

export const updateReviewForm = (name, value) => {
   const formData = {name, value}
    return {
        type: "UPDATE_NEW_REVIEW_FORM",
        formData
    }
}

export const resetReviewForm = () => {
    return {
        type: "RESET_NEW_REVIEW_FORM",
       
    }
}


//async

export const createReview = (reviewFormData, history) => {
    return dispatch => {
        const sendableReviewData = {
            content: reviewFormData.content,
            user_id: reviewFormData.user_id,
            album_id: reviewFormData.album_id,
            likes: reviewFormData.likes,
            dislikes: reviewFormData.dislikes
        }
        return fetch("http://localhost:3000/api/v1/reviews", {
        credentials: "include",  
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(sendableReviewData)
        })
        .then(r => r.json())
        .then(resp => {
          if (resp.error) {
            alert(resp.error)
          } else {
            console.log(resp.data);
           dispatch(addReview(resp.data))
           dispatch(resetReviewForm())
           history.push(`/albums/${resp.data.attributes.album.id}/reviews`)
          }
        })
          .catch(console.log())
      }
}