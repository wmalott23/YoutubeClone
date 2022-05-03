import axios from "axios";
import React, { useState } from "react";
import API_KEY from "../../secret.jsx";


const SearchBar = (props) => {

    const [videos, setVideos] = useState({})
    const [searchTerm, setSearchTerm] = useState("")

    const handleSubmit = async (event) => {
        event.preventDefault()
        console.log(searchTerm)
        try{
            let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${searchTerm}&key=${API_KEY}&part=snippet&type=video`)
            setVideos(response.data)
        }
        catch(e){
            console.log(e.message)
        }
        console.log(videos.items[0].id)
        console.log(videos.items[0].id.videoId) // 1st video ID of search

        setSearchTerm(videos)
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Search Terms" value={searchTerm} onChange={(event) => {setSearchTerm(event.target.value)}}/>
            <button type="submit"></button>
        </form>
     );
}
 
export default SearchBar;