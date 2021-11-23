import axios from 'axios';
import firebaseConfig from '../apiKeys';

const baseURL = firebaseConfig.databaseURL;

const getProjects = () => new Promise((resolve, reject) => {
  axios
  // .get(`${baseURL}/projects.json?orderBy="firebaseKey"&equalTo="${firebaseKey}"`)
    .get(`${baseURL}/projects.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch(reject);
});

const getSingleProject = (firebaseKey) => new Promise((resolve, reject) => {
  axios
    .get(`${baseURL}/projects/${firebaseKey}.json`)
    .then((response) => {
      resolve(response.data);
    })
    .catch(reject);
});

const deleteProject = (firebaseKey) => new Promise((resolve, reject) => {
  axios
    .delete(`${baseURL}/projects/${firebaseKey}.json`)
    .then(() => getProjects().then(resolve))
    .catch(reject);
});

const updateProject = (firebaseKey, updateObj) => new Promise((resolve, reject) => {
  axios
    .patch(`${baseURL}/projects/${firebaseKey}.json`, updateObj)
    .then(() => getProjects().then(resolve))
    .catch(reject);
});

const createProject = (obj) => new Promise((resolve, reject) => {
  axios
    .post(`${baseURL}/projects.json`, obj)
    .then((response) => {
      const firebaseKey = response.data.name;
      axios
        .patch(`${baseURL}/projects/${firebaseKey}.json`, { firebaseKey })
        .then(() => {
          getProjects().then(resolve);
        });
    })
    .catch(reject);
});

export {
  getProjects,
  getSingleProject,
  deleteProject,
  updateProject,
  createProject,
};
