import React, { useState } from 'react';
import LikeDislike from '../LikeDislike/LikeDislike';
import "./Comment.css";

const Comment = (props) => {
    return ( 
        <div>
            <p>
                {props.user}
            </p>
            <textarea className="comment border border-white rounded overflow-auto">
                {props.textBody}
            </textarea>
            <LikeDislike className="border border-white rounded"likes={props.likes} dislikes={props.dislikes} videoId={props.videoId} textBody={props.textBody} commentId={props.commentId}/>
        </div>
     );
}
 
export default Comment;