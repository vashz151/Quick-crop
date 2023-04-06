import axios from "axios";
export const fetchNews = async (page) => {
  const baseUrl = "https://quickcrop.onrender.com";
  const url = baseUrl + "/news?page=" + page;
  let response = await axios.get(url);
  return response.data;
};
