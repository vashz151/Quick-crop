import axios from "axios";
export const sendMessage = async (mobile) => {
  const baseUrl = "http://127.0.0.1:5000";
  const url = "/send-message";
  let response = await axios.post(baseUrl + url, { mobile: "91" + mobile });
  return response.data;
};
