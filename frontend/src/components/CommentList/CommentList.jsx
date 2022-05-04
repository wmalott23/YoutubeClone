import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Comment from '../Comment/Comment'




const CommentList = (props) => {

    const [comments, setComments] = useState([])
    const videoId = props.videoId

    useEffect(() => {
        const fetchComments = async () => { 
            try {
                let response = await axios.get(`http://127.0.0.1:8000/api/comments/${videoId}/`)
                setComments(response.data);
            } catch (error) {
                console.log(error.message);
            }
        }
        fetchComments();
        console.log(videoId)
        }, [])    
    
    return ( 
        <div>
            {comments.map((comment) => {
                    return (<Comment user={comment.user.username} textBody={comment.text}/>)})}
        </div>
     );
}
 
export default CommentList;