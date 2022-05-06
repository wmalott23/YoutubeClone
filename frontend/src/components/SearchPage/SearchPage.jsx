import SearchBar from "../SearchBar/SearchBar";
import React, { useEffect, useState } from 'react';
import API_KEY from "../../secret.jsx";
import { useParams } from "react-router-dom";
import axios from "axios";
import SearchResult from "../SearchResult/SearchResult"
import "./SearchPage.css"



const SearchPage = (props) => {

    const {searchTerm} = useParams()
    const [searchResults, setSearchResults] = useState([])
    const fetchVideos = async () => {
      try {
        let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${searchTerm}&key=${API_KEY}&part=snippet&type=video`)
        setSearchResults(response.data.items);
      } catch (error) {
        console.log(error.message);
      }
    };

    useEffect(() => {
        fetchVideos();
      }, []);

    return ( 
        <div className="text-white d-flex flex-column justify-content-center p-1">
            <SearchBar/>
            <div className="all_results text-white d-flex flex-column justify-content-center p-1">
              {searchResults.map((searchItem, index) => (
                <SearchResult searchResult={searchItem} setVideo={props.setVideo} index={index}/>
                ))}
            </div>
        </div>

     );
}
 
export default SearchPage;