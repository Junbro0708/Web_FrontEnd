import axiosInstance from './axiosInstance';

export const getHotDealListApi = async () => {
  const response = await axiosInstance.get('/hotdeal/list');
  return response.data;
};

export const getHotDealTimeApi = async () => {
  const response = await axiosInstance.get('/hotdeal/time');
  return response.data;
};
