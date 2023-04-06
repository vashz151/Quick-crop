import axios from "axios";
export const sendMessage = async (mobile) => {
  const baseUrl = "https://quickcrop.onrender.com";
  const url = "/send-message";
  let response = await axios.post(baseUrl + url, { mobile: "91" + mobile });
  return response.data;
};
