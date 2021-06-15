const initialState = {
    title: "",
    cover: "",
    artist: "",
    genre: "",
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "UPDATE_NEW_FAVORITE_FORM":
            const returnVal =  {
                ...state,
                [action.formData.name]: action.formData.value
            }
            return returnVal 
        case "RESET_NEW_FAVORITE_FORM":
            return initialState
        case "SET_FAVORITE_FORM_FOR_EDIT":
            return action.favoriteFormData
        default:
            return state
    }
}