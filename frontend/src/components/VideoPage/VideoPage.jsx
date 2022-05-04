import { useParams } from "react-router-dom";
import RelatedVideos from "../RelatedVideos/RelatedVideos";
import { useState, useEffect } from "react";
import axios from "axios";
import API_KEY from "../../secret.jsx";
import { Link } from "react-router-dom";
import CommentForm from "../CommentForm/CommentForm";
import useAuth from "../../hooks/useAuth";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import CommentList from "../CommentList/CommentList";



const VideoPage = (props) => {

    const {videoId} = useParams()
    const video = props.video
    const [searchResults, setSearchResults] = useState([])
    const [user, token] = useAuth();


    useEffect(() => {
        const fetchVideos = async () => {
            try {
              let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${videoId}&type=video&key=${API_KEY}&part=snippet`)
              setSearchResults(response.data.items);
            } catch (error) {
              console.log(error.message);
            }
          };
          
        fetchVideos();
      }, []);

    return ( 
        <div>
            <VideoPlayer videoId={videoId} />
            {video.snippet.title}
            {video.snippet.description}
            <RelatedVideos searchResults={searchResults} setVideo={props.setVideo} />

          <div>
                {!user ? 
                        <form >
                            <textarea placeholder="You must be logged in to post a comment">
                            </textarea>
                            <button >
                            </button>
                        </form> :
                        <CommentForm videoId={videoId} />
                }
          </div>
            <CommentList videoId={videoId}/>
        </div>
        
     );
}
export default VideoPage;