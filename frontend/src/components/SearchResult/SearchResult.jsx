import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./SearchResult.css"

const SearchResult = (props) => {
    return ( 
        <div className="d-flex flex-column col-md-8 justify-content-center border border-box shadow p-3 mb-5 rounded">
                <Link to={`/video/${props.searchResult.id.videoId}`} onClick={props.setVideo(props.searchResult)}>
            <div key={props.index} className="searchResult d-flex flex-row align-items-center justify-content-end text-white p-1">
                <div>
                    <h2 className="p-1"> 
                    {props.searchResult.snippet.title}
                    </h2>
                </div>
                <div>
                    <img className="p-1" src={props.searchResult.snippet.thumbnails.medium.url} alt="no video"/>
                </div>
            </div>
                </Link>
            <div className="p-1">
                {props.searchResult.snippet.description}
            </div>
        </div>
     );
}
 
export default SearchResult;