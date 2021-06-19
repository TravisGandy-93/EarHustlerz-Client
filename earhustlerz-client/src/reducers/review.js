const initialState = []

export default (state = initialState, action) => {
   switch(action.type) { 
        case "ADD_REVIEW":
            return state.attributes.reviews.concat(action.review)
        default:
            return state
    }
}
