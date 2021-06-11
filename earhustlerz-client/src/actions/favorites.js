//synchro
export const setFavorites = favorites => {
    return {
        type: "SET_FAVORITES",
        favorites
    }
}

export const clearFavorites = () => ({
  type: "CLEAR_FAVORITES"
})

//asynchro
export const getFavorites = () =>{
    return dispatch => {
        return fetch("http://localhost:3000/api/v1/albums", {
        credentials: "include",
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
      })
        .then(r => r.json())
        .then(response => {
          if (response.error) {
            console.log(response.error)
          } else {
            dispatch(setFavorites(response.data))
          }
        })
        .catch(console.log)
    }
}