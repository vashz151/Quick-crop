import axios from "axios";

export const fetchNews = async (page) => {
  const url = "/news?page=" + page;
  let response = await axios.get(url);
  return response.data;
};
