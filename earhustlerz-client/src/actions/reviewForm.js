export const updateReviewForm = (name, value) => {
    return {
        type: "UPDATE_NEW_REVIEW_FORM",
        formData: {name, value}
    }
}

export const resetReviewForm = () => {
    return {
        type: "RESET_NEW_REVIEW_FORM",
       
    }
}