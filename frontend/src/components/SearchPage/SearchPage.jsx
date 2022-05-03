import SearchBar from "../SearchBar/SearchBar";
import React, { useState } from 'react';
import SearchResult from "./SearchResult/SearchResult";


const SearchPage = (props) => {

    const [searchResults, setSearchResults] = useState([])
    

    return ( 
        <div>

        <div>
        
            <SearchBar setSearchResults={setSearchResults}/>
            
        </div>
                <div>
                    <SearchResult   video_id={searchResults.items.id.videoId}
                                    thumbnail={searchResults.items.snippet.thumbnails.high}
                                    description={searchResults.items.snippet.description}
                                    title={searchResults.items.snippet.title}
                    />
                </div>

        </div>
     );
}
 
export default SearchPage;