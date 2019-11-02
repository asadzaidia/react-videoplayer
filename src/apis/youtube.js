import axios from "axios";
const KEY = "AIzaSyCjJJr3UgdkAg1TyruQKfbWy3mSuY-m6_M";

export const baseParams = {
  part: "snippet",
  maxResults: 5,
  key: KEY
};
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3"
});
