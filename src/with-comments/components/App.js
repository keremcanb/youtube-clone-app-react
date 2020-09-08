import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import youtube from "../api/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

const App = () => {
  // state is the returned videos array and the selected video
  const [videosState, setVideosState] = useState([]);
  const [selectedVideoState, setSelectedVideoState] = useState(null);

  // Access the Axios instance asynchronously with YouTube get request
  const onTermSubmitCb = async (term) => {
    const youtubeResponse = await youtube.get("/search", {
      params: {
        q: term,
      },
    });

    // set component state with returned YouTube data
    setVideosState(youtubeResponse.data.items);

    setSelectedVideoState(youtubeResponse.data.items[0]);
  };

  // component mount olduğunda onTermSubmit'i girilen string ile güncelle
  // Lifecycle method that will submit a default search term when page first renders
  useEffect(() => {
    onTermSubmitCb("slayer");
  }, []);

  // menüden video seçildiğinde selectedVideo state'ini güncelle
  // set state based on selected video from the displayed video list
  const onVideoSelectCb = (video) => {
    setSelectedVideoState(video);
  };

  return (
    <div className="ui container">
      {/* onTermSubmit callback prop olarak SearchBar onFormSubmit'e aktar  */}
      {/* Pass the onTermSubmit callback as a prop to SearchBar */}
      <SearchBar onFormSubmitCbProp={onTermSubmitCb} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            {/* selectedVideo state'ini video prop olarak VideoDetail'e aktarıyoruz */}
            {/* pass selected video state as a prop to VideoDetail */}
            <VideoDetail videoProp={selectedVideoState} />
          </div>
          <div className="five wide column">
            {/* onVideoSelect callback prop'unu ve videos state prop'unu VideoList'e aktar */}
            {/* the callback function onVideoSelect and state videos is passed to VideoList */}
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
