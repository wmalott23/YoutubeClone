import React from 'react';
import { Link } from 'react-router-dom';



const RelatedVideos = (props) => {
  
    return ( 
            <div>
              {props.title}
              <Link to={`/video/${props.videoId}/`} onClick={props.setVideo(props.searchResult)}>
                <img src={props.image} alt="no video"/>
              </Link>
            </div>
    )
}
 
export default RelatedVideos;