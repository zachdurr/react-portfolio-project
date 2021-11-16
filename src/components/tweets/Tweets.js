import React, { Component } from 'react';
import Tweet from './Tweet';

class Tweets extends Component {
    render() {
        const { tweets, deleteTweet } = this.props
        const tweetList = tweets.map(tweet => {
            return (
                <Tweet  
                    key={tweet.id}
                    tweet={tweet}
                    deleteTweet={deleteTweet}
                />
            )
        })
        return(
            <ul>
                {tweetList}
            </ul>
        );
    }
}

export default Tweets