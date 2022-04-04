import { axiosInstance } from './axiosInstance.service';

export const getAllProducts = async () => {
  const response = await axiosInstance.get('/images');
  return response.data;
};
