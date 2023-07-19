import React from "react";

export default function Comments( { comments }) {
    return (
        <React.Fragment>
            <hr />
            <h2>{comments.length} Comments</h2>
            {comments.map( (comment) => {
                return <React.Fragment key={comment.id}><h4>{comment.user}</h4><p>{comment.comment}</p></React.Fragment>
            })}
        </React.Fragment>
    )
}