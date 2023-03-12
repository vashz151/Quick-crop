import axios from "axios";

export const fetchNews = async (page) => {
  const url = "https://quickcrop.onrender.com/news?page=" + page;
  let response = await axios.get(url);
  return response.data;
};
