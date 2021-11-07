const urlBase = 'http://localhost:3000';

const getFurniture = (success, failure) => {
  setTimeout(() => {
    fetch(urlBase + '/furniture')
      .then(response => response.json())
      .then(success)
      .catch(failure);
  }, 1000)
}

const deleteFurniture = (success, failure, id) => {
  fetch(urlBase + '/furniture/' + id , { method: 'DELETE' })
  .then(response => response.json())
  .then(success)
  .catch(failure);
}


const API = {
  getFurniture,
  deleteFurniture
};