import React, { Component } from 'react';
import TweetsContainer from '../../containers/TweetsContainer';

class Tweet extends Component {
    handleOnClick() {
        this.props.deleteTweet(this.props.tweet.id)
    }

    render(){
        const { tweet } = this.props

        return (
            <div>
                <li>
                    {tweet.text}
                    <button onClick={() => this.handleOnClick()}> X </button>
                    <TweetsContainer tweet={tweet} />
                </li>
            </div>
        )
    }
};

export default Tweet;