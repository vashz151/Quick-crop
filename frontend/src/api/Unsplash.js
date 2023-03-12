import axios from "axios";
export const fetchImages = async (searchPage, pageSize, apikey, query) => {
  const url = "https://api.unsplash.com/search/photos";
  const params = {
    query: query,
    per_page: pageSize,
    page: searchPage,
  };
  const headers = {
    Authorization: `Client-ID ${apikey}`,
  };
  let response = await axios.get(url, { params, headers });
  return response.data.results;
};
