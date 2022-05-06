import React from 'react';
import { Link } from 'react-router-dom';



const RelatedVideos = (props) => {
  
    return ( 
        <div>
            {props.searchResults.map(function(searchResult, index){
              if(typeof searchResult.snippet !== "undefined"){
                return (
                  <div key={index}>
                  {searchResult.snippet.title}
                  <Link to={`/video/${searchResult.id.videoId}/`} onClick={props.setVideo(searchResult)}>
                    <img src={searchResult.snippet.thumbnails.default.url} alt="no video"/>
                  </Link>
                </div>)
              }})}
          </div>
    )
}
 
export default RelatedVideos;