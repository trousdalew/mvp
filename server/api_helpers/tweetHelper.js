const axios = require('axios');
const config = require('../../config.js');
var Base64 = require('js-base64').Base64;
let Promise = require('bluebird');

let searchurl = 'https://api.twitter.com/1.1/search/tweets.json';
let authurl = 'https://api.twitter.com/oauth2/token';
let count = '100';

let getAuth = () => {
    let key = encodeURI(config.key);
    let secret = encodeURI(config.secret);
    let credentials = key + ':' + secret;
    credentials = Base64.encode(credentials);
    let headers = {
        headers: {
            Authorization: 'Basic ' + credentials,
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8.',
            'User-Agent': 'Profiler455434',
            Host: 'api.twitter.com'
        }
    };
    axios.post(authurl, 'grant_type=client_credentials', headers).then((result) => {
      auth = result.data;
    }).catch((err) => {
      console.log('Error acquiring authorization: ', err);
    });
}

// getAuth();

let fetchTweets = (term) => {
  let query = `?q=${term}&count=${count}`;

  let headers = {
      headers: {
          Authorization: `Bearer ${config.auth.access_token}`,
          'User-Agent': 'Profiler455434',
          Host: 'api.twitter.com'
      }
  }

  return new Promise((resolve, reject) => {
    axios.get(searchurl + query, headers).then((result) => {
      resolve(result);
    }).catch((err) => {
        reject(err);
    });
  });
};

module.exports.fetchTweets = fetchTweets;