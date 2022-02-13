import axios from "axios";
const KEY = "AIzaSyByRiyeU39bJNXmAx4YDognCiC4DAkbZr4";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    type: "video",
    key: KEY,
  },
});

// youtube.get();
