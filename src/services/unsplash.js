import axios from 'axios';
import {ACCESS_KEY, URL} from '@constants';

export const getImages = async page => {
  const result = await axios.get(
    `${URL}${page}&query=coding&client_id=${ACCESS_KEY}`,
  );
  return result.data.results;
};

export const getMoreImages = async page => {
  const result = await axios.get(
    `${URL}${page + 1}&query=coding&client_id=${ACCESS_KEY}`,
  );
  return result.data.results;
};

export const getDataFromAuthor = async author => {
  const result = await axios.get(
    `${URL}1&query=${author}&client_id=${ACCESS_KEY}`,
  );
  return result.data.results;
};
