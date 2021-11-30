export const fetchTweets = () => {
    return (dispatch) => {
        dispatch({type: 'LOADING_TWEETS'});
        fetch("http://localhost:3000/tweets").then(res => {
            return res.json()
        }).then((resJSON) => {
            dispatch({type: 'ADD_TWEETS', tweets: resJSON})
        })
    }
}

export const addTweetApi = (text) => {
    const data = { text: text }
    return (dispatch) => {
        fetch("http://localhost:3000/tweets", {
            body: JSON.stringify(data),
            method: 'POST',
            mode: 'cors',
            headers:  {
                "Content-Type": "application/json",
                "Accept": "application/json"
              },
        }).then(res => res.json()).then((resJSON) => {
            console.log(resJSON)
            dispatch({type: 'ADD_TWEET', text})
        }).catch((err) => console.log('err', err))
        }
}
