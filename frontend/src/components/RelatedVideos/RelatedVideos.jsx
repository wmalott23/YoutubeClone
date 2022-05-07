import React from 'react';
import { Link } from 'react-router-dom';



const RelatedVideos = (props) => {
  
    return ( 
        <div className="d-flex flex-row text-white p-1 ">
            {props.searchResults.map(function(searchResult, index){
              if(typeof searchResult.snippet !== "undefined"){
                return (
                  <div className="border-white text-white d-flex flex-center p-1 m-1 border border-white rounded" key={index}>
                    <Link to={`/video/${searchResult.id.videoId}/`} onClick={props.setVideo(searchResult)}>
                      <img src={searchResult.snippet.thumbnails.default.url} alt="no video"/>
                    </Link>
                    <div className="p-1 m-1">
                      {searchResult.snippet.title}
                    </div>
                  </div>)
              }})}
        </div>
    )
}
 
export default RelatedVideos;