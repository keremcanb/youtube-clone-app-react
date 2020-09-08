import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import youtube from "../api/youtube";

const App = () => {
  const [videosState, setVideosState] = useState([]);
  const [selectedVideoState, setSelectedVideoState] = useState(null);

  const onTermSubmitCb = async (term) => {
    const youtubeResponse = await youtube.get("/search", {
      params: {
        q: term,
      },
    });

    setVideosState(youtubeResponse.data.items);
    setSelectedVideoState(youtubeResponse.data.items[0]);
  };

  useEffect(() => {
    onTermSubmitCb("slayer");
  }, []);

  const onVideoSelectCb = (video) => {
    setSelectedVideoState(video);
  };

  return (
    <div className="ui container">
      <SearchBar onFormSubmitCbProp={onTermSubmitCb} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail videoProp={selectedVideoState} />
          </div>
          <div className="five wide column">
            <VideoList
              videosProp={videosState}
              onVideoSelectProp={onVideoSelectCb}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
