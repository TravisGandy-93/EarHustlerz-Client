const initialState = {
    title: "",
    cover: "",
    artist: ""
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "UPDATE_NEW_FAVORITE_FORM":
            return  {
                ...state,
                [action.formData.name]: action.formData.value
            }
        case "RESET_NEW_FAVORITE_FORM":
            return initialState
        default:
            return state
    }
}