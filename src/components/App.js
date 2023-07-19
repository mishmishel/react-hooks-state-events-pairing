import video from "../data/video.js";
import VideoPlayer from "./VideoPlayer.js";
import VideoInfo from "./VideoInfo.js";
import React, {useState} from 'react';
import Comments from "./Comments.js";

function App() {

  const [upvotes, setUpvotes] = useState(video.upvotes);
  const [downvotes, setDownvotes] = useState(video.downvotes);
  const [showComments, setShowComments] = useState(true);

  function toggleComments() {
    setShowComments(!showComments);
  }

  return (
    <div className="App">
      <VideoPlayer url={video.embedUrl} title={video.title} />
      <VideoInfo title={video.title} views={video.views} date={video.createdAt} upvotes={upvotes} downvotes={downvotes}
      setUpvotes={setUpvotes} setDownvotes={setDownvotes}/>
      <button onClick={toggleComments}>{ showComments ? "Hide" : "Show" } Comments</button>
      {
        showComments 
        ?
        <Comments comments={video.comments}/>
        :
        null
      }
    </div>
  );
}

export default App;
