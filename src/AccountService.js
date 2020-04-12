import React from 'react';
const BASE_URL = 'http://localhost:3000';

async function createUser(credentials) {
  try {
    const endpoint = BASE_URL + '/users/signup';
    let response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': '<<calculated when request is sent>',
      },
      body: JSON.stringify(credentials),
    });
    if (response.status === 403) {
      return false; // TODO RETURN A VALUE SO WE KNOW TO DISSPLAYE USER DOES NOT EXIST
    }
    let responseJson = await response.json();
    return responseJson.token;
  } catch (error) {
    console.log('Error creating user: ${error}' + error.message);
  }
}

async function signIn(credentials) {
  try {
    const endpoint = BASE_URL + '/users/signin';
    let response = await fetch(endpoint, {
      method: 'GET',
      body: JSON.stringify(credentials),
    });
    let responseJson = await response.json();
    return responseJson.token;
  } catch (error) {
    console.log('Error signing in: ${error}');
  }
}
export {createUser};
export {signIn};
