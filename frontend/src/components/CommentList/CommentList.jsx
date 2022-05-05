import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Comment from '../Comment/Comment';
import useAuth from "../../hooks/useAuth";
import CommentForm from '../CommentForm/CommentForm';
import ReplyList from '../ReplyList/ReplyList';


const CommentList = (props) => {

    const [comments, setComments] = useState([])
    const videoId = props.videoId
    const [user, token] = useAuth();

    useEffect(() => {
        fetchComments();
        }, [videoId])    

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
                    <textarea placeholder="You must be logged in to post a comment"/>
                </form> :
                <CommentForm videoId={videoId} fetchComments={fetchComments}/>
            }
            {comments.map((comment) => {
                return (
                    <div>
                        <Comment user={comment.user.username} textBody={comment.text} commentId={comment.id} likes={comment.likes} dislikes={comment.dislikes} videoId={props.videoId}/>
                        <ReplyList commentId={comment.id} />
                    </div>
                )})}
        </div>
     );
}
 
export default CommentList;