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
        <div className="d-flex flex-column col-md-8 justify-content-center">
            {!user ? 
                <form >
                    <textarea placeholder="You must be logged in to post a comment"/>
                </form> :
                <CommentForm videoId={videoId} fetchComments={fetchComments}/>
            }
            {comments.map((comment, index) => {
                return (
                    <div key={index}>
                        <Comment className="col-md-6 justify-content-start" user={comment.user.username} textBody={comment.text} commentId={comment.id} likes={comment.likes} dislikes={comment.dislikes} videoId={props.videoId}/>
                        <ReplyList className="col-md-6 justify-content-end" commentId={comment.id} />
                    </div>
                )})}
        </div>
     );
}
 
export default CommentList;