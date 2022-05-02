import SearchBar from "../SearchBar/SearchBar";
import React, { useState } from 'react';


const SearchPage = (props) => {

    const [searchResults, setSearchResults] = useState([])

    return ( 
        <SearchBar />
     );
}
 
export default SearchPage;