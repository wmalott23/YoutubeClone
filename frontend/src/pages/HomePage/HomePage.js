import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import API_KEY from "../../secret.jsx";


import axios from "axios";

const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage
  const [user, token] = useAuth();
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=football&key=${API_KEY}&part=snippet&type=video`, {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        setVideos(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchVideos();
  }, [token]);
  return (
    <div className="container">
      <h1>Home Page for {user.username}!</h1>
      {videos &&
        videos.map((video) => (
          <p key={video.items.id.videoId}> 
            <img src={video.items.snippet.thumbnails.high.url} alt="no video"/>
            {video.items.snippet.title}
          </p>
        ))}
    </div>
  );
};

export default HomePage;
