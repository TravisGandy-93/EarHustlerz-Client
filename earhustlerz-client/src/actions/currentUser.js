//synchronous action creator
export const setCurrentUser = user => {
    return {
        type: "SET_CURRENT_USER",
        user
    }
}

//asynchronous
export const login = credentials => {
    return dispatch => {
        return fetch("tcp://localhost:3001")
    }
}