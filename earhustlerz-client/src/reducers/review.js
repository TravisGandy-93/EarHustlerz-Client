const initialState = []

export default (state = initialState, action) => {
   switch(action.type) { 
        case "SET_REVIEWS":
            return action.review
        case "ADD_REVIEW":
            return state.concat(action.review)
        default:
            return state
    }
}
