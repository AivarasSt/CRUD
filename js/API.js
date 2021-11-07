const urlBase = 'http://localhost:3000';

const getFurniture = () => {
  fetch(urlBase + '/furniture')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.error(err));
}

const deleteFurniture = (id) => {
  fetch(urlBase + '/furniture/' + id) //, { method: 'DELETE' })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));
}


getFurniture();
deleteFurniture(102);