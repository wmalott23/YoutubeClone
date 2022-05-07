import axios from 'axios';
import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import "./ReplyForm.css"


const ReplyForm = (props) => {

    const [textBody, setTextBody] = useState('')
    const commentId = props.commentId
    const [user, token] = useAuth();

    const storeReply = async (event) => {
        event.preventDefault();
        let reply = {
            comment_id : commentId,
            text : textBody
        }
        try {
            let response = await axios.post(`http://127.0.0.1:8000/api/comments/${commentId}/replies/`, reply, {
                headers: {
                    Authorization: "Bearer " + token,
                },
            
            });
            
        } catch (error) {
            console.log(error.message);
        }
        props.fetchReplies()
    }

    return ( 
        <form className="reply_form" onSubmit={storeReply}>
            <textarea className="border border-white rounded" value={textBody} placeholder="Write your reply here!" onChange={(event) => setTextBody(event.target.value)}>
            </textarea>
            <button className='rounded m-1' type="submit">
                Reply
            </button>
        </form>
     );
}
 
export default ReplyForm;