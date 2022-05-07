import axios from "axios";
import React, { useState } from 'react';
import useAuth from "../../hooks/useAuth";

const LikeDislike = (props) => {

    const [user, token] = useAuth()
    const [temp, setTemp] = useState({video_id: props.videoId, text: props.textBody, likes: props.likes, dislikes: props.dislikes})

    const handleLike = async () => {
        setTemp(temp.likes++)
        let request = await axios.put(`http://127.0.0.1:8000/api/comments/${props.commentId}/update/`, temp, {
            headers: {
                Authorization: "Bearer " + token,
            }})
        setTemp(request.data)
    }

    const handleDislike = async () => {
        setTemp(temp.dislikes++)
        let request = await axios.put(`http://127.0.0.1:8000/api/comments/${props.commentId}/update/`, temp, {
            headers: {
                Authorization: "Bearer " + token,
            }})
        setTemp(request.data)
    }

    return ( 
        <div>
            {temp.likes}
            <button className="rounded m-1" onClick={handleLike}>Like</button>
            {temp.dislikes}
            <button className="rounded m-1" onClick={handleDislike}>Dislike</button>
        </div>
     );
}
 
export default LikeDislike;