import axios from "axios";
import React, { useEffect, useState } from 'react';
import useAuth from "../../hooks/useAuth";


const LikeDislike = (props) => {

    const [user, token] = useAuth()
    const [temp, setTemp] = useState({video_id: props.videoId, text: props.textBody, likes: props.likes, dislikes: props.dislikes})
    let showLikes = temp.likes
    // useEffect(() => {
    //     const resetTemp = () => {
    //         setTemp()
    //     }
    // })

    const handleLike = async () => {
        setTemp(temp.likes++)
        let request = await axios.put(`http://127.0.0.1:8000/api/comments/${props.commentId}/update/`, temp, {
            headers: {
                Authorization: "Bearer " + token,
            }
        })

    }

    const handleDislike = async () => {
        temp.dislikes++
        let request = await axios.put(`http://127.0.0.1:8000/api/comments/${props.commentId}/update/`, temp, {
            headers: {
                Authorization: "Bearer " + token,
            }
        })
    }

    return ( 
        <div>
            {showLikes}
            <button onClick={handleLike}>Like</button>
            {temp.dislikes}
            <button onClick={handleDislike}>Dislike</button>
        </div>
     );
}
 
export default LikeDislike;