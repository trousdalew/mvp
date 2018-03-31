const express = require('express');
const morgan = require('morgan');
const tweetHelper = require('./api_helpers/tweetHelper.js');
const sentiment = require('./api_helpers/sentimentHelper.js');
let app = express();

let port = 3013;

app.listen(port, () => {
    console.log('Listening on port: ', port);
});

app.use(morgan('tiny'));

app.use(express.static(__dirname + '/../client/dist'));

app.get('/search/user/:username', (req, res) => {
  console.log('Searching for user: ', req.params.username);
  tweetHelper.fetchTweets('from:' + req.params.username).then((result) => {
      let tweets = {
          contentItems: []
      };
      result.data.statuses.forEach((tweet) => {
          if (tweet.text.substring(0, 2) !== 'RT') {
            tweets.contentItems.push(JSON.stringify({
                content: tweet.text
            }));
          }
      });
      sentiment.analyze(tweets, res);
  }).catch((err) => {
      console.log('Error fetching user tweets: ', err);
      res.status(500).end();
  });
});

app.get('/search/tag/:hashtag', (req, res) => {
    console.log('Searching for tag: ', req.params.hashtag);
    tweetHelper.fetchTweets('%23' + req.params.hashtag).then((result) => {
        let tweets = [];
        result.data.statuses.forEach((tweet) => {
            if (tweet.text.substring(0, 2) !== 'RT') {
                tweets.push(tweet.text);
            }
        });
        res.send(tweets);
    }).catch((err) => {
        console.log('Error fetching user tweets: ', err);
        res.status(500).end();
    });
});