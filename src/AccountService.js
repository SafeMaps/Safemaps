import React, { useEffect, useState } from 'react';
import {AsyncStorage} from 'react-native';

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
      return false;
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
async function saveKey(token) {
  try {
    await AsyncStorage.setItem('token', token);
    console.log('Key saved');
  } catch (error) {
    console.log('Error saving token ${error}');
  }
}
async function getKey() {
  try {
    const value = await AsyncStorage.getItem('token');
    if (value !== null) {
      console.log('Returning saved value' + value);
      return value;
    }
  } catch (error) {
    console.log('There was an error getting they stored key ${error}');
  }
}
 async function getRoute(source, destination) {
    const des_lat = destination.latitude.toString();
    const des_lng = destination.longitude.toString();
    const source_lat = source.latitude.toString();
    const source_lng = source.longitude.toString();

   try {
    let response = await fetch('http://localhost:3000/routes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': '<<calculated when request is sent>'
      },
      body: JSON.stringify({
        source: {
          latitude: source_lat,
          longitude: source_lng
        },
        destination: {
          latitude: des_lat,
          longitude: des_lng
        }
      }),
    });
    if (response.status === 403) {
      return false;
    }
    let json = await response.json();
    const {routeCoordinates} = json;
     return routeCoordinates

  } catch (error) {
    console.log('Error getting route: ${error}' + error.message);
  }

}

export {createUser, signIn, saveKey, getKey, getRoute};

