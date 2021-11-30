export const addUser = (username, password) => {
    return (dispatch) => {
        dispatch({type: 'ADD_USER', username, password})
    }
}