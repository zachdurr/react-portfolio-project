import React, { Component } from 'react';
import Comments from './Comments';

class CommentForm extends Component {
    state = {
        text: ''
    }

    handleOnChange = event => {
        this.setState({
            text: event.target.value
        });
    }

    handleOnSubmit = event => {
        event.preventDefault();
        this.props.addComment({text: this.state.text, tweetId: this.props.tweetId})
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
                        placeholder="add comment here"
                        value={this.state.text}
                        onChange={this.handleOnChange}
                    />
                    <input type="submit" />
                </form>
            </div>
        )
    }
}