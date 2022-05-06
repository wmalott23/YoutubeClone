import { useParams } from "react-router-dom";
import RelatedVideos from "../RelatedVideos/RelatedVideos";
import { useState, useEffect } from "react";
import axios from "axios";
import API_KEY from "../../secret.jsx";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import CommentList from "../CommentList/CommentList";
import SearchBar from "../SearchBar/SearchBar"
import "./VideoPage.css"


const VideoPage = (props) => {

    const {videoId} = useParams()
    const [searchResults, setSearchResults] = useState([])
    const [video, setVideo] = useState(props.video)

    const fetchVideos = async () => {
      let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${videoId}&key=${API_KEY}&part=snippet&type=video`);
      setSearchResults(response.data.items)
      }

    useEffect(() => {
         fetchVideos();
      }, [videoId]);

    return ( 
        <div className="text-white d-flex flex-column justify-content-center p-1">
          <SearchBar />
            <VideoPlayer className="justify-self-center" videoId={videoId} />
            <h2>{props.video.snippet.title}</h2>
            <div className="description overflow-auto">
              {props.video.snippet.description}
            </div>
            <RelatedVideos className="text-white d-flex flex-row p-1"searchResults={searchResults} setVideo={props.setVideo} />
            <CommentList videoId={videoId}/>
        </div>
        
     );
}
export default VideoPage;