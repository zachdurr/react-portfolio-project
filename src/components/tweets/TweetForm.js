import { addTweetApi } from "../actions/tweetAction";
import { connect } from "react-redux";
import React, { Component } from "react";

class TweetForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }

    handleOnChange = event => {
        this.setState({
            text: event.target.value
        })
    }

    handleOnSubmit = event => {
        event.preventDefault();
        // this.props.addTweet(this.state.text)
        this.props.addTweetApi(this.state.text)
        this.setState({
            text: ''
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    <input 
                        type="text" 
                        placeholder="tweet goes here!" 
                        value={this.state.text} 
                        onChange={this.handleOnChange} 
                    />
                    <input type="submit" />
                </form>
            </div>
        )
    }
}


export default connect(null, { addTweetApi })(TweetForm);