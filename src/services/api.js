import Axios from 'axios';

const BASE_URL = 'https://swapi.co/api/';

export function getRaces() {
  return Axios.get(`${BASE_URL}species/`)
    .then(response => {
      if(response) {
        return response['data']['results']
      }
    });
}

export function getRaceByName (name) {
  return Axios.get(`${BASE_URL}species/?search=${name}`)
    .then(response => {
      if(response) {
        return response['data']['results']
      }
    })
}
