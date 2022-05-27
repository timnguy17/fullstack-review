const axios = require('axios');
const config = require('../config.js');

let getReposByUsername = (userName) => {
  // TODO - Use the axios module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out,
  // but you'll have to fill in the URL
  let options = {
    url: `https://api.github.com/users/${userName}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };

  return axios.get(options.url)
    // .then((res) => {
    //   console.log('success get!');
    //   callback(res)
    // })
    // .catch((err) =>{
    //   console.log('failed get req!!', err)
    // });

}

module.exports.getReposByUsername = getReposByUsername;