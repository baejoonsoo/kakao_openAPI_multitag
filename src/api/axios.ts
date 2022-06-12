import axios from "axios";
import KEYS from "./config.json";

const BASE_URL = "https://dapi.kakao.com/v2/vision/multitag/generate";

export const getMultitagOfURL = async (url: string) => {
  return await axios
    .request({
      url: `${BASE_URL}`,
      method: "POST",
      headers: {
        "content-Type": "application/x-www-form-urlencoded",
        Authorization: `KakaoAK ${KEYS.REST_API_KEY}`,
      },
      params: {
        image_url: url,
      },
    })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getMultitagOfFile = async (file: FormData) => {
  return await axios
    .request({
      url: `${BASE_URL}`,
      method: "POST",
      headers: {
        "content-Type": "multipart/form-data",
        Authorization: `KakaoAK ${KEYS.REST_API_KEY}`,
      },
      data: file,
    })
    .then((res) => {
      console.log(res);
      return res;
    })
    .catch((err) => {
      console.log(err);
    });
};
