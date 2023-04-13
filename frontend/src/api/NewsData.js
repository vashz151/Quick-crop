import axios from "axios";
export const fetchNews = async (page) => {
  const baseUrl = "http://127.0.0.1:5000";
  const url = baseUrl + "/news?page=" + page;
  let response = await axios.get(url);
  return response.data;
};
