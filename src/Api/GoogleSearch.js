import axios from "axios";

const BASEURL = "https://www.googleapis.com/customsearch/v1";
const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
const cx = process.env.REACT_APP_GOOGLE_CX_KEY;

export const getResults = async (query) => {
  const fullURL = `${BASEURL}?key=${API_KEY}&cx=${cx}&q=${query}`;

  const response = await axios.get(fullURL);

  return response.data;
};
