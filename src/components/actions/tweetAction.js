export const fetchTweets = () => {
    return (dispatch) => {
        dispatch({type: 'LOADING_TWEETS'});
        fetch("http://localhost:3000/tweets/index").then(res => {
            return res.json()
        }).then((resJSON) => {
            dispatch({type: 'ADD_TWEET', tweets: resJSON})
        })
            
    }
}