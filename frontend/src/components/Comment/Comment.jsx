import React, { useState } from 'react';
import LikeDislike from '../LikeDislike/LikeDislike';

const Comment = (props) => {
    return ( 
        <div>
            <p>
                {props.user}
            </p>
            <textarea>
                {props.textBody}
            </textarea>
            <LikeDislike likes={props.likes} dislikes={props.dislikes} videoId={props.videoId} textBody={props.textBody} commentId={props.commentId}/>
        </div>
     );
}
 
export default Comment;