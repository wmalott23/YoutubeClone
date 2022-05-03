import { useParams } from "react-router-dom";

const VideoPage = (props) => {

    const {videoId} = useParams()
    const video = props.video

    return ( 
        <div>
            
            <iframe id="ytplayer" type="text/html" width="640" height="360"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&origin=http://example.com`}
            frameborder="0">
            </iframe>
            {video.snippet.title}
            {video.snippet.description}

        </div>
     );
}
export default VideoPage;