import React, { useState } from "react";
import { Link } from "react-router-dom";


const SearchBar = (props) => {

    const [searchTerm, setSearchTerm] = useState("")


    return ( 
        <form>
                <input type="text" placeholder="Search Terms" value={searchTerm} onChange={(event) => {setSearchTerm(event.target.value)}}/>
                <Link to={`/search/${searchTerm}`}> 
                <button type="submit"></button>
                </Link>
        </form>
     );
}
 
export default SearchBar;