import axios from "axios";
import React, { useState } from "react";
import API_KEY from "../../secret.jsx";

const SearchPage = (props) => {

    const [videos, setVideos] = useState({})
    const [searchTerm, setSearchTerm] = useState("")

    const handleSubmit = async (event) => {
        event.preventDefault()
        console.log(searchTerm)
        console.log(API_KEY)
        try{
            let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${searchTerm}&key=${API_KEY}`)
            setVideos(response.data)
        }
        catch(e){
            console.log(e.message)
        }
        console.log(videos)
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Search Terms" value={searchTerm} onChange={(event) => {setSearchTerm(event.target.value)}}/>
            <button type="submit"></button>
        </form>
     );
}
 
export default SearchPage;