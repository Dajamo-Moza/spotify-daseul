import axios from "axios";

export const getData = async (method, url, config) => {
  const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
  });
  try {
    const res = await instance[method](url, config);
    return res;
  } catch (error) {
    throw new Error(error);
  }
};
