import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001/api";

export const addOrder = async (order) => {
  const response = await axios.post(`/order`, order);
  return response.data;
};

export const getOrders = async (email) => {
  const response = await axios.post(`/order/get-all`, { email });
  return response.data;
};
