import { axiosInstance } from './axiosInstance.service';

export const getAllProducts = async () => {
  const response = await axiosInstance.get('/images', {
    params: {
      page: 1,
      limit: 5,
    }
  });

  return response.data;
};
