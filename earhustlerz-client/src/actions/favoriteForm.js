export const updateFavoriteForm = (name, value) => {
    return {
        type: "UPDATE_NEW_FAVORITE_FORM",
        formData: {name, value}
    }
}

export const resetFavoriteForm = () => {
    return {
        type: "RESET_NEW_FAVORITE_FORM",
       
    }
}