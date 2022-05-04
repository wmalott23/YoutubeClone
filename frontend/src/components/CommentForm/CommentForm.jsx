import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useAuth from "../../hooks/useAuth";




const CommentForm = (props) => {

    const [text, setText] = useState('')
    const videoId = props.videoId
    const [user, token] = useAuth();


    const [comment, setComment] = useState({
        "video_id" : videoId,
        "text" : text
    })


    const storeComment = async (event) => {
        event.preventDefault();
        try {
            let response = await axios.post(`http://127.0.0.1:8000/api/comments/`, comment, {
                headers: {
                    Authorization: "Bearer " + token,
                },
            });
            console.log(response)
        } catch (error) {
            console.log(error.message);
        }
    }



    return ( 
        <form onSubmit={storeComment}>
            <input value={text} placeholder="Write your comment here!">
            </input>
            <button type="submit">
                Submit
            </button>
        </form>
     );
}
 
export default CommentForm;