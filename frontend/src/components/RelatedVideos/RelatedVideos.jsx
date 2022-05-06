import React from 'react';
import { Link } from 'react-router-dom';



const RelatedVideos = (props) => {
  
    return ( 
        <div className="d-flex flex-row text-white p-1">
            {props.searchResults.map(function(searchResult, index){
              if(typeof searchResult.snippet !== "undefined"){
                return (
                  <div className="border-white text-white d-flex flex-column justify-content-center p-1" key={index}>
                  <Link to={`/video/${searchResult.id.videoId}/`} onClick={props.setVideo(searchResult)}>
                    <img src={searchResult.snippet.thumbnails.default.url} alt="no video"/>
                  </Link>
                  {searchResult.snippet.title}
                </div>)
              }})}
          </div>
    )
}
 
export default RelatedVideos;