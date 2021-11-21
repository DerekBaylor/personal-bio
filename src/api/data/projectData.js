import axios from 'axios';
import firebaseConfig from '../apiKeys';

const baseURL = firebaseConfig.databaseURL;

const getProjects = () => new Promise((resolve, reject) => {
  axios
  //   .get(`${baseURL}/projects.json?orderBy="projectId"&equalTo="${projectId}"`)
    .get(`${baseURL}/projects.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch(reject);
});

export default getProjects;
