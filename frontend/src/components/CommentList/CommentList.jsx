import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Comment from '../Comment/Comment'
import useAuth from "../../hooks/useAuth";
import CommentForm from '../CommentForm/CommentForm';




const CommentList = (props) => {

    const [comments, setComments] = useState([])
    const videoId = props.videoId
    const [user, token] = useAuth();

    useEffect(() => {
        fetchComments();
        console.log(videoId)
        }, [])    

    const fetchComments = async () => { 
        try {
            let response = await axios.get(`http://127.0.0.1:8000/api/comments/${videoId}/`)
            setComments(response.data);
        } catch (error) {
            console.log(error.message);
        }
    }
    
    return ( 
        <div>
                {!user ? 
                        <form >
                            <textarea placeholder="You must be logged in to post a comment">
                            </textarea>
                            <button >
                            </button>
                        </form> :
                        <CommentForm videoId={videoId} fetchComments={fetchComments}/>
                }
            {comments.map((comment) => {
                    return (<Comment user={comment.user.username} textBody={comment.text}/>
                        
                    )})}
        </div>
     );
}
 
export default CommentList;