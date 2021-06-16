const initialState = []

export default (state = initialState, action) => { 
    switch (action.type) {
        case "SET_FAVORITES":
            return action.favorites
        case "ADD_FAVORITE":
            return state.concat(action.favorite)
        case "UPDATE_FAVORITE":
            return state.map(favorite => favorite.id === action.favorite.id ? action.favorite : favorite)
        case "DELETE_FAVORITE":
            return state.filter(favorite => favorite.id === action.id ? false : true)            
        case "CLEAR_FAVORITES":
            return initialState
    default:
        return state
    }
} 