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

export const setFavoriteForEdit = (favorite) => {
    const favoriteFormData = {
        title: favorite.title,
        artist: favorite.artist,
        cover: favorite.cover,
        genre: favorite.genre 
    }

    return {
        type: "SET_FAVORITE_FORM_FOR_EDIT",
        favoriteFormData
    }
}
