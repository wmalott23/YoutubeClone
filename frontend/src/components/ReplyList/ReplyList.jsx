import React, { useState, useEffect } from 'react';
import useAuth from "../../hooks/useAuth";
import Reply from '../Reply/Reply';
import axios from 'axios';
import ReplyForm from "../ReplyForm/ReplyForm";


const ReplyList = (props) => {

    const [replies, setReplies] = useState([])
    const [user, token] = useAuth();
    const commentId = props.commentId

    useEffect(() => {
        fetchReplies()
        }, [])    

    const fetchReplies = async () => { 
        try {
            let response = await axios.get(`http://127.0.0.1:8000/api/comments/${commentId}/replies/`, {
                headers: {
                    Authorization: "Bearer " + token,
                }})
            setReplies(response.data);
        } catch (error) {
            console.log(error.message);
        }
    }

    return ( 
        <div className="d-flex flex-column col-md-6 align-content-end">
            {!user ? 
                    <form >
                        <textarea className="border border-white rounded" placeholder="You must be logged in to post a reply">
                        </textarea>
                    </form> :
                    <ReplyForm commentId={commentId} fetchReplies={fetchReplies}/>}
            {replies.map((reply, index) => {
                return (<Reply key={index} user={reply.user.username} textBody={reply.text}/>)})}
                
        </div>

     );
}
 
export default ReplyList;