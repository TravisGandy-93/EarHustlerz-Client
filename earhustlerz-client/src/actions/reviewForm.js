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

export const createReview = () => {

}