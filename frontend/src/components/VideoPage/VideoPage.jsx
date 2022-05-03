import { useParams } from "react-router-dom";
import RelatedVideos from "../RelatedVideos/RelatedVideos";
import { useState, useEffect } from "react";
import axios from "axios";
import API_KEY from "../../secret.jsx";
import { Link } from "react-router-dom";


const VideoPage = (props) => {

    const {videoId} = useParams()
    const video = props.video
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
      }, []);

    return ( 
        <div>
            
            <iframe id="ytplayer" type="text/html" width="640" height="360"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&origin=http://example.com`}
            frameBorder="0">
            </iframe>
            {console.log(video)}
            {console.log(video.snippet)}
            {video.snippet.title}
            {video.snippet.description}
            {searchResults.map((searchResult, index) => (
            <div key={index}>
              {searchResult.snippet.title}
              <Link to={`/video/${searchResult.id.videoId}`} onClick={props.setVideo(searchResult)}>
                <img src={searchResult.snippet.thumbnails.default.url} alt="no video"/>
              </Link>
            </div>
          ))}
        </div>
     );
}
export default VideoPage;