var FormData = require('form-data');
var form_data = new FormData();
var f = require('fetch');
form_data.append('christiancastro3@aol.com', 'ccastro');
form_data.append('password', 'test123$');

let BASE_URL = 'http://localhost:3000/';

fetch(BASE_URL + '/users/signup', {
  method: 'post',
  body: form_data,
})
  .then(response => response.json())
  .then(responseJson => {
    console.log(JSON.stringify(responseJson));
  });
