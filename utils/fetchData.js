import axios from "axios";

export const getData = async (method, url, config) => {
  const instance = axios.create({
    baseURL: process.env.SERVER,
    headers: {
      Authorization: `Bearer ${process.env.API_KEY}`,
    },
  });
  try {
    const res = await instance[method](url, config);
    return res;
  } catch (error) {
    // throw new Error(error);
    console.log(error);
  }
};
