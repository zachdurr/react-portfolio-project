import React, { Component } from "react";
import CommentForm from "../components/comments/CommentForm";
import Comments from "../components/comments/Comments";
import { connect } from "react-redux";

class CommentsContainer extends Component {
    render() {
        return (
            <div>
                <CommentForm 
                    addComment={this.props.addComment}
                    tweetId={this.props.tweet.id}
                />
                <Comments
                    comments={this.props.comments}
                    tweetId={this.props.tweet.id}
                    deleteComment={this.props.deleteComment}
                />
            </div>
        );
    }
}

const mapStateToProps = ({ comments }) => {
    return {comments}
}

const mapDispatchToProps = dispatch => ({
    addComment: comment => dispatch({type: 'ADD_COMMENT', comment}),
    deleteComment: id => dispatch({type: 'DELETE_COMMENT', id})
})

export default connect(mapStateToProps, mapDispatchToProps)(CommentsContainer);