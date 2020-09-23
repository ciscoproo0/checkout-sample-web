import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://checkout-sample-api.herokuapp.com',
});
