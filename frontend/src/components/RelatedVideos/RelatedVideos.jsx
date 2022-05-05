import React from 'react';
import { Link } from 'react-router-dom';



const RelatedVideos = (props) => {


    return ( 
        <div>
            {props.searchResults.map((searchResult, index) => (
            <div key={index}>
              {searchResult.snippet.title}
              <Link to={`/video/${searchResult.id.videoId}/`} onClick={props.setVideo(searchResult)}>
                <img src={searchResult.snippet.thumbnails.default.url} alt="no video"/>
              </Link>
            </div>
          ))}
        </div>
    )
}
 
export default RelatedVideos;