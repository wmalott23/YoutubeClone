import SearchBar from "../SearchBar/SearchBar";
import React, { useEffect, useState } from 'react';
import API_KEY from "../../secret.jsx";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";



const SearchPage = (props) => {

    const {searchTerm} = useParams()
    const [searchResults, setSearchResults] = useState([])
    
    useEffect(() => {
        const fetchVideos = async () => {
          try {
            let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${searchTerm}&key=${API_KEY}&part=snippet&type=video`)
            setSearchResults(response.data.items);
          } catch (error) {
            console.log(error.message);
          }
        };
        fetchVideos();
      }, []);

    return ( 
        <div>
            <SearchBar/>
        {searchResults.map((searchResults, index) => (
            <div key={index}>
              {searchResults.snippet.title}
              <Link to={`/video/${searchResults.id.videoId}`}>
                <img src={searchResults.snippet.thumbnails.high.url} alt="no video"/>
              </Link>
            </div>
          ))}
        </div>

     );
}
 
export default SearchPage;