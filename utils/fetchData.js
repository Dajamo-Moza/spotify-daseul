import axios from "axios";

export const getData = async (method, url, config) => {
  const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_SERVER,
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
    },
  });
  try {
    const res = await instance[method](url, config);
    return res;
  } catch (error) {
    console.log(error);
  }
};
