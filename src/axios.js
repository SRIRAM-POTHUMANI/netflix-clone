import axios from "axios";

const instance1 = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  // https://api.themoviedb.org/3/trending/all/week?api_key=af49b918f8432975d136bc17a80498a3&language=en-US
});

export default instance1;
