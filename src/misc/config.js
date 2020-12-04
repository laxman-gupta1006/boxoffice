const API_BASE_URL = 'http://api.tvmaze.com/';

/* eslint-disable no-unused-vars */
export async function apiGet(queryString) {
  const response = await fetch(
    `${API_BASE_URL}${queryString}`
  ).then(r => r.json());
  return response
}
