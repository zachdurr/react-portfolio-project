import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageTweets(state = {
    tweets: [],
    comments: [],
}, action) {
    switch(action.type) {
        case 'ADD_TWEET':
            const tweet = {text: action.text, id: cuidFn() };
            return {
                ...state,
                tweets: [...state.tweets, tweet]
            }
        case 'DELETE_TWEET':
            const tweets = state.tweets.filter(tweet => tweet.id !== action.id);
            return {...state, tweets}

        case 'ADD_COMMENT':
            const comment = { text: action.comment.text, tweetId: action.review.tweetId, id: cuidFn()};
            return {...state,
                comments: [...state.comments, comment]
            }
        case 'DELETE_COMMENT':
            const comments = state.comments.filter(comment => comment.id !== action.id);
            return {...state, comments }   
            
        default: 
            return state;
    }

};