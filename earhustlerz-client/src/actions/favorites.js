import { resetFavoriteForm } from "./favoriteForm"

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

export const addFavorite = favorite => {
  return {
    type: "ADD_FAVORITE",
    favorite
  }
}

export const deleteFavoriteStore = id => {
  return {
    type: "DELETE_FAVORITE",
    id
  }
}

export const updateFavoriteStore = favorite => {
  return {
    type: "UPDATE_FAVORITE",
    favorite
  }
}

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

export const createFavorite = (favoriteData, history) => {
  return dispatch => {
    const sendableFavoriteData = {
      title: favoriteData.title,
      artist: favoriteData.artist,
      cover: favoriteData.cover,
      genre: favoriteData.genre,
      user_id: favoriteData.user_id 
    }
    return fetch("http://localhost:3000/api/v1/albums", {
    credentials: "include",  
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(sendableFavoriteData)
    })
    .then(r => r.json())
    .then(resp => {
      if (resp.error) {
        alert(resp.error)
      } else {
        dispatch(addFavorite(resp.data))
        console.log(resp.data);
        dispatch(resetFavoriteForm())
        history.push(`/albums/${resp.data.id}`)
      }
    })
      .catch(console.log())
  }
}

export const updateFavorite = (favoriteData, history) => {
  return dispatch => {
    const sendableFavoriteData = {
      title: favoriteData.title,
      artist: favoriteData.artist,
      cover: favoriteData.cover,
      genre: favoriteData.genre,
      user_id: favoriteData.user_id 
    }
    return fetch(`http://localhost:3000/api/v1/albums/${favoriteData.id}`, {
    credentials: "include",  
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(sendableFavoriteData)
    })
    .then(r => r.json())
    .then(resp => {
      if (resp.error) {
        alert(resp.error)
      } else {
        dispatch(updateFavoriteStore(resp.data))
        console.log(resp.data);
        history.push(`/albums/${resp.data.id}`)
      }
    })
      .catch(console.log())
  }
}

export const deleteFavorite = (id, history) => {
  return dispatch => {
    return fetch(`http://localhost:3000/api/v1/albums/${id}`, {
    credentials: "include",  
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      'Accept': 'application/json'
    }
   })
    .then(r => r.json())
    .then(resp => {
      if (resp.error) {
        alert(resp.error)
      } else {
        dispatch(deleteFavoriteStore(id))
        history.push(`/`)
      }
    })
      .catch(console.log())
  }
};
