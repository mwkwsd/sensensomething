import React from 'react';
import logo from './logo.svg';
import './App.css';
import { VideoCard } from './components/molecules/videoCard/VideoCard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <VideoCard
       url=''
       title='Title'
       clientName='Client'
       roles={[]}
       genre='documentary'
       />
      </header>
    </div>
  );
}

export default App;
