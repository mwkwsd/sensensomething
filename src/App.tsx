import "./App.css";
import { IVideoCard } from "./common/interfaces/IVideoCard";
import { VideoCard } from "./components/molecules/videoCard/VideoCard";

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
    <div className="App">
      <header className="App-header">
        <VideoCard {...video} />
      </header>
    </div>
  );
}

export default App;
