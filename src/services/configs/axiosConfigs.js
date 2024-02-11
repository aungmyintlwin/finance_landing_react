import axios from "axios";
import {BACKEND_API_URL} from "@env";

export const ApiRequest = async (value) => {

    let result,
    parameter,
    path = BACKEND_API_URL;
    // let userToken = get storage or state;
    // let userLang = get storage or state;
  // Set the AUTH token for any request
  axios.interceptors.request.use((config) => {
    // const Lang = userLang ? userLang : "en";
    const Lang = "en";
    config.headers = {
      // Authorization: `Bearer ${userToken}`,
      Accept: "application/json",
      "Accept-Language": `${Lang}`,
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
      "Access-Control-Allow-Credentials": "true",
      // 'Cache-Control': 'no-cache'
    };
    return config;
  });

  if (
    value.method === "post" ||
    value.method === "patch" ||
    value.method === "put" ||
    value.method === "delete"
  ) {
    parameter = {
      baseURL: path,
      method: value.method,
      url: value.url,
      data: value.params,
    };
  } else {
    parameter = {
      baseURL: path,
      method: value.method,
      url: value.url,
      params: value.params,
    };
  }
    // calling api
    await axios(parameter)
    .then(async (response) => {
      result = response;
    })
    .catch(async (error) => {
      return Promise.reject(error);
    });
    return result;
};
