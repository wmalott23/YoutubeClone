import { useParams } from "react-router-dom";
import RelatedVideos from "../RelatedVideos/RelatedVideos";
import { useState, useEffect } from "react";
import axios from "axios";
import API_KEY from "../../secret.jsx";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import CommentList from "../CommentList/CommentList";



const VideoPage = (props) => {

    const {videoId} = useParams()
    const {title} = useParams()
    const {description} = useParams()
    const [searchResults, setSearchResults] = useState([])


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
      }, [videoId]);

    return ( 
        <div>
            <VideoPlayer videoId={videoId} title={title} description={description}/>
            <RelatedVideos searchResults={searchResults} setVideo={props.setVideo} />
            <CommentList videoId={videoId}/>
        </div>
        
     );
}
export default VideoPage;