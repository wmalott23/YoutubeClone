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


    useEffect(() => {
        const fetchVideos = async () => {
              let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${videoId}&key=${API_KEY}&part=snippet&type=video`);
              setSearchResults(response.data.items);
         }
         fetchVideos();
      }, [videoId]);

    return ( 
        <div>
          <SearchBar />
          {console.log(props.video)}
          {console.log(searchResults)}
            <VideoPlayer videoId={videoId} />
            {props.video.snippet.title}
            {props.video.snippet.description}
              {searchResults.map((searchResult, index) => (
              <RelatedVideos key={index} searchResult={searchResult} title={searchResult.snippet.title} videoId={searchResult.id.videoId} setVideo={props.setVideo} image={searchResult.snippet.thumbnails.default.url}/>))}
            <CommentList videoId={videoId}/>
        </div>
        
     );
}
export default VideoPage;