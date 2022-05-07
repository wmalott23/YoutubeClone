import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useAuth from "../../hooks/useAuth";



const CommentForm = (props) => {

    const [textBody, setTextBody] = useState('')
    const videoId = props.videoId
    const [user, token] = useAuth();

    const storeComment = async (event) => {
        event.preventDefault();
        let comment = {
            video_id : videoId,
            text : textBody
        }
        try {
            let response = await axios.post(`http://127.0.0.1:8000/api/comments/`, comment, {
                headers: {
                    Authorization: "Bearer " + token,
                },
            
            });
            
        } catch (error) {
            console.log(error.message);
        }
        console.log(comment)
        props.fetchComments()
    }



    return ( 
        <div className='row-align-end'>
            <form className="p-1 m-1 border border-white rounded" onSubmit={storeComment}>
                <textarea className="m-1 border border-white rounded" value={textBody} placeholder="Write your comment here!" onChange={(event) => setTextBody(event.target.value)}>
                </textarea>
                <button className='rounded-pill' type="submit">
                    Comment
                </button>
            </form>
        </div>
     );
}
 
export default CommentForm;