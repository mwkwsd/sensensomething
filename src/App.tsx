import React from 'react';
import "./App.css";
import { IVideoCard } from "./common/interfaces/IVideoCard";
import { VideoCard } from "./components/molecules/videoCard/VideoCard";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./components/organisms/Home";
import Contact from "./components/organisms/Contact";
import VideoListPage from "./components/organisms/VideoListPage";
import SeriesPage from "./components/organisms/SeriesPage";
import AnimationPage from "./components/organisms/AnimationPage";


function App() {
  const video: IVideoCard = {
    url: "https://player.vimeo.com/video/121707380",
    // url: "https://player.vimeo.com/video/121707380?h=d6c613b55d&color=ef9700&portrait=0",
    title: "From Mass to the Mountain",
    clientName: "Self",
    genre: "documentary",
    roles: ["director_producer"],
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="videoListPage" element={<VideoListPage />} />
        <Route path="series" element={<SeriesPage />} />
        <Route path="animation" element={<AnimationPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
