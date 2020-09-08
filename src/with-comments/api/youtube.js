import axios from "axios";

const KEY = "AIzaSyCzlMNS48ZuwQF1KKc9HVTaVvsW_6MF0nM";

export default axios.create({
  baseURL: " https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
