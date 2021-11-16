import React, { Component } from "react";
import Comment from './Comment';

class Comments extends Component {
    render() {
        const { comments, tweetId, deleteComment } = this.props
        const specifiedComments = comments.filter(comment => comment.tweetId === tweetId)

        const commentList = specifiedComments.map((comment, idx) => {
            return <Comment key={idx} comment={comment} deleteComment={deleteComment} />
        })

        return(
            <ul>
                {commentList}
            </ul>
        );
    }
};

export default Comments;