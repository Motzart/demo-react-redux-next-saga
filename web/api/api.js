import fetch from 'isomorphic-fetch';

const API_BASE_URL = 'http://localhost:8081/api/v1';

export default class Api {
  static getItems() {
    const url = `${API_BASE_URL}/items`;
    return fetch(url, { method: 'GET' });
  }
}
