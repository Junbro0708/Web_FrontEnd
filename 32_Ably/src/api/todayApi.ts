import axiosInstance from './axiosInstance';

export const getTodayListApi = async () => {
  const response = await axiosInstance.get('/today/list');
  return response.data;
};
