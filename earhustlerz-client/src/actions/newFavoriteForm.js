export const updateNewFavoriteForm = (name, value) => {
    return {
        type: "UPDATE_NEW_FAVORITE_FORM",
        formData: {name, value}
    }
}

export const resetNewFavoriteForm = () => {
    return {
        type: "RESET_NEW_FAVORITE_FORM",
       
    }
}