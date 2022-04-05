import { axiosInstance } from './axiosInstance.service';

export const setLikeProductAPI = async ({ id }) => {
  try {
    const response = await axiosInstance.post(`/images/${id}/likes`);
    
    if (response.status === 204) return true;
    else return false
    
  } catch (error) {
    console.log(error);
  }
};
