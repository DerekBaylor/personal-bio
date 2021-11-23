import axios from 'axios';
import firebaseConfig from '../apiKeys';

const baseURL = firebaseConfig.databaseURL;

const getContactInfo = () => new Promise((resolve, reject) => {
  axios
    .get(`${baseURL}/contactInfoData.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch(reject);
});

export default getContactInfo;
