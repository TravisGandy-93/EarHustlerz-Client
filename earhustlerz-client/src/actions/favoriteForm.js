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
        title: favorite.attributes.title,
        artist: favorite.attribute.artist,
        cover: favorite.attribute.cover,
        genre: favorite.attribute.genre
    }
    return {
        type: "SET_FAVORITE_FOR_EDIT",
        favoriteFormData 
    }
};
