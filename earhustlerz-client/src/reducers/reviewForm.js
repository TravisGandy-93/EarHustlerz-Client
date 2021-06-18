const initialState = {
   content: "",
   likes: 0,
   dislikes: 0,
   album_id: [],
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "UPDATE_NEW_REVIEW_FORM":
            const returnVal =  {
                [action.formData.name]: action.formData.value
            }
            return returnVal 
        case "RESET_NEW_REVIEW_FORM":
            return initialState
        default:
            return state
    }
}