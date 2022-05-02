import axios from "axios";
import React, { useState } from "react";

const API_KEY = process.env.REACT_APP_API_KEY
const SearchPage = (props) => {

    const [videos, setVideos] = useState({})
    const [searchTerm, setSearchTerm] = useState("")

    const handleSubmit = async (event) => {
        event.preventDefault()
        console.log(searchTerm)
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