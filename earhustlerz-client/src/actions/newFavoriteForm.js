export const updateNewFavoriteForm = (name, value) => {
    return {
        type: "UPDATE_NEW_FAVORITE_FORM",
        formData: {name, value}
    }
}
