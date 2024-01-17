import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/templates/Home";
import Contact from "./components/templates/Contact";
import { VideoListPage } from "./components/templates/VideoListPage";
import SeriesPage from "./components/templates/SeriesPage";
import AnimationPage from "./components/templates/AnimationPage";
import { Header } from "./components/molecules/headers/Header";

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/video-list-page" element={<VideoListPage />} />
          <Route path="/series" element={<SeriesPage />} />
          <Route path="/animation" element={<AnimationPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
