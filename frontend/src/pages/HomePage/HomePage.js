import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import API_KEY from "../../secret.jsx";
import SearchBar from "../../components/SearchBar/SearchBar";
import { Link } from "react-router-dom";


import axios from "axios";

const HomePage = (props) => {
  // The "user" value from this Hook contains the decoded logged in user information
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  
  const [user, token] = useAuth();
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=css&key=${API_KEY}&part=snippet&type=video`)
        setVideos(response.data.items);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchVideos();
    console.log(videos)
  }, [token]);

  return (
    <div className="container d-flex flex-column align-content-center p-1">
      <SearchBar />
      <h1 className="text-white">Home Page for {user.username}!</h1>
      {videos.map((video, index) => (
          <div key={index} className="text-white d-flex flex-column align-content-center p-1">
            <Link to={`/video/${video.id.videoId}/`} onClick={props.setVideo(video)}>
              <img src={video.snippet.thumbnails.high.url} alt="no video"/>
            </Link>
            <h1>
              {video.snippet.title}
            </h1>
            <h5 className="overflow-hidden">
            {video.snippet.description}
            </h5>
          </div>
        ))}
    </div>
  );
};

export default HomePage;
