import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageTweets(state = {
    tweets: [],
    comments: [],
    loading: false,
    done: false,
    username: '',
    password: '',
    logged_in: false
}, action) {
    switch(action.type) {
        case 'ADD_TWEET':
            const tweet = {text: action.text, id: cuidFn() };
            return {
                ...state,
                tweets: [...state.tweets, tweet]
            }
        case 'ADD_TWEETS':
            const api_tweets = action.tweets
            return {
                ...state,
                tweets: [...state.tweets, ...api_tweets],
                loading: false,
                done: true
            }
        case 'DELETE_TWEET':
            const tweets = state.tweets.filter(tweet => tweet.id !== action.id);
            return {...state, tweets}

        case 'LOADING_TWEETS':
            console.log(
                'loading_tweet', state.tweets
            )
            return {
                ...state,
                tweets: [...state.tweets],
                loading: true
            }

        case 'ADD_COMMENT':
            const comment = { text: action.comment.text, tweetId: action.comment.tweetId, id: cuidFn()};
            return {...state,
                comments: [...state.comments, comment]
            }
        case 'DELETE_COMMENT':
            const comments = state.comments.filter(comment => comment.id !== action.id);
            return {...state, comments }   

        case 'ADD_USER':
            return {
                ...state,
                username: action.username,
                password: action.password,
                logged_in: true
            }
        default: 
            return state;
    }

};