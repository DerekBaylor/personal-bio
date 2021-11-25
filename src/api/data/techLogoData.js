import axios from 'axios';
import firebaseConfig from '../apiKeys';

const baseURL = firebaseConfig.databaseURL;

const getTechLogos = () => new Promise((resolve, reject) => {
  axios
    .get(`https://derek-baylor.netlify.app/${baseURL}/technologyTable.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch(reject);
});

const getSingleTechLogo = (firebaseKey) => new Promise((resolve, reject) => {
  axios
    .get(`${baseURL}/technologyTable/${firebaseKey}.json`)
    .then((response) => {
      resolve(response.data);
    })
    .catch(reject);
});

const deleteTechLogo = (firebaseKey) => new Promise((resolve, reject) => {
  axios
    .delete(`${baseURL}/technologyTable/${firebaseKey}.json`)
    .then(() => getTechLogos().then(resolve))
    .catch(reject);
});

const updateTechLogo = (firebaseKey, updateObj) => new Promise((resolve, reject) => {
  axios
    .patch(`${baseURL}/technologyTable/${firebaseKey}.json`, updateObj)
    .then(() => getTechLogos().then(resolve))
    .catch(reject);
});

const createTechLogo = (obj) => new Promise((resolve, reject) => {
  axios
    .post(`${baseURL}/technologyTable.json`, obj)
    .then((response) => {
      const firebaseKey = response.data.name;
      axios
        .patch(`${baseURL}/technologyTable/${firebaseKey}.json`, {
          firebaseKey,
        })
        .then(() => {
          getTechLogos().then(resolve);
        });
    })
    .catch(reject);
});

export {
  getTechLogos,
  getSingleTechLogo,
  deleteTechLogo,
  updateTechLogo,
  createTechLogo,
};
