import axios from "axios";
import KEYS from "../config.json";

const BASE_URL = "https://dapi.kakao.com/v2/vision/multitag/generate";

export const getMultitagOfURL = (url) => {
  return axios
    .request({
      url: `${BASE_URL}?image_url=${url}`,
      method: "POST",
      headers: {
        "content-Type": "application/x-www-form-urlencoded",
        Authorization: `KakaoAK ${KEYS.REST_API_KEY}`,
      },
    })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
    });
};
