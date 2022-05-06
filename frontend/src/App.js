// General Imports
import { Routes, Route } from "react-router-dom";
import React, { useState } from 'react';
import "./App.css";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import SearchPage from "./components/SearchPage/SearchPage";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import VideoPage from "./components/VideoPage/VideoPage";


function App() {
  const [video, setVideo] = useState({})
  
  return (
    <div className="background">
      <Navbar />
      <Routes >
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage setVideo = {setVideo}/>
            </PrivateRoute>
          }
        />
        <Route path="/video/:videoId/" element={<VideoPage video={video} setVideo={setVideo}/>} />
        <Route path="/search/:searchTerm" element={<SearchPage setVideo = {setVideo} />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
