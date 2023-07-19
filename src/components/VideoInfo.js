import React from "react";

export default function VideoInfo({title,views,date,upvotes,downvotes,setUpvotes,setDownvotes}) {

    function increaseVote(type) {
        if (type==='upvote') {
            setUpvotes(upvotes+1)
        } else {
            setDownvotes(downvotes+1)
        }
    }

    return (
        <div>
            <h1>{title}</h1>
            <p>{views} Views | Uploaded {date}</p>
            <p><button onClick={()=>{increaseVote("upvote")}}>{upvotes} 👍🏻</button><button onClick={()=>{increaseVote("downvote")}}>{downvotes} 👎🏻</button></p>
        </div>
    )
}