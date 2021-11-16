import React, { Component } from "react";
import TweetForm from "../components/tweets/TweetForm";
import Tweets from "../components/tweets/Tweets";
import { connect } from 'react-redux';

class TweetsContainer extends Component {
    render() {
        return(
            <div>
                <TweetForm addTweet={this.props.addTweet} />
                <Tweets
                    tweets={this.props.tweets}
                    deleteTweet={this.props.deleteTweet}
                />
            </div>
        )
    }
}

const mapStateToProps = state => ({ tweets: state.tweets})

const mapDispatchToProps = dispatch => ({
    addTweet: text => dispatch({type: 'ADD_TWEET', text}),
    deleteTweet: id => dispatch({type: 'DELETE_TWEET', id})
})

export default connect(mapStateToProps, mapDispatchToProps)(TweetsContainer);