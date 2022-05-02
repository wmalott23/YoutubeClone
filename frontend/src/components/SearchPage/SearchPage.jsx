import SearchBar from "../SearchBar/SearchBar";
import React, { useState } from 'react';
import SearchResult from "./SearchResult/SearchResult";


const SearchPage = (props) => {

    const [searchResults, setSearchResults] = useState([])

    let results = searchResults.map((el) => {
        return el.id.videoId
    })

    return ( 
        <div>
        
            <SearchBar setSearchResults={setSearchResults}/>
            
            {results}
        </div>
     );
}
 
export default SearchPage;