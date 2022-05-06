import { useParams } from "react-router-dom";
import RelatedVideos from "../RelatedVideos/RelatedVideos";
import { useState, useEffect } from "react";
import axios from "axios";
import API_KEY from "../../secret.jsx";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import CommentList from "../CommentList/CommentList";
import SearchBar from "../SearchBar/SearchBar"


const VideoPage = (props) => {

    const {videoId} = useParams()
    const [searchResults, setSearchResults] = useState([])
    const [tempResponse, setTempResponse] = useState([])
    const [video, setVideo] = useState(props.video)


    useEffect(() => {
        const fetchVideos = async () => {
              let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${videoId}&key=${API_KEY}&part=snippet&type=video`);
              setTempResponse(response.data.items)
              setSearchResults(tempResponse.filter(function(el){
                if(typeof el.snippet != "undefined") return true;
              }))
         }
         fetchVideos();
      }, [videoId]);

    return ( 
        <div className="text-white d-flex flex-column align-content-center p-1">
          {console.log(props.video)}
          {console.log(tempResponse)}
          {console.log(tempResponse[0].snippet)}
          {console.log(tempResponse[1].snippet)}
          {console.log(tempResponse[2].snippet)}
          {console.log(tempResponse[3].snippet)}
          {console.log(tempResponse[4].snippet)}
          {console.log(searchResults)}
          <SearchBar />
            <VideoPlayer videoId={videoId} />
            {props.video.snippet.title}
            {props.video.snippet.description}
            <RelatedVideos searchResults={searchResults} setVideo={props.setVideo} />
            <CommentList videoId={videoId}/>
        </div>
        
     );
}
export default VideoPage;