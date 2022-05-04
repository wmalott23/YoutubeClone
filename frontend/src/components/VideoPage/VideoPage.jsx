import { useParams } from "react-router-dom";
import RelatedVideos from "../RelatedVideos/RelatedVideos";
import { useState, useEffect } from "react";
import axios from "axios";
import API_KEY from "../../secret.jsx";
import { Link } from "react-router-dom";
import CommentForm from "../CommentForm/CommentForm";
import useAuth from "../../hooks/useAuth";



const VideoPage = (props) => {

    const [comment, setComment] = useState('')
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
            <iframe id="ytplayer" type="text/html" width="640" height="360"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&origin=http://example.com`}
            frameBorder="0">
            </iframe>
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
        </div>
        
     );
}
export default VideoPage;