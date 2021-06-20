export const addReview = review => {
    return {
      type: "ADD_REVIEW",
      review
    }
}

export const setReviews = review => { 
    return {
        type: "SET_REVIEWS",
        review
    }
}

// async

export const getReviews = () =>{
    return dispatch => {
        return fetch("http://localhost:3000/api/v1/reviews", {
        credentials: "include",
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
      })
        .then(r => r.json())
        .then(response => {
          if (response.error) {
            console.log(response.error)
          } else {
            dispatch(setReviews(response.data))
          }
        })
        .catch(console.log)
    }
}