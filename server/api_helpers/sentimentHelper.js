const config = require('../../config.js');
const PersonalityInsightsV3 = require('watson-developer-cloud/personality-insights/v3');

var personality_insights = new PersonalityInsightsV3({
  username: config.watson.username,
  password: config.watson.password,
  version_date: '2017-09-21',
  url: config.watson.url
});

let analyze = (input, res) => {
    console.log('Watson Input: ', input);
    var params = {
        'content': input,
        'content_type': 'application/json',
        'X-Watson-Learning-Opt-Out': 'true'
      };
      
      personality_insights.profile(params, function(error, response) {
        if (error) {
          console.log('Error analyzing data: ', error);
          res.status(500).end();
        } else {
          res.send(JSON.stringify(response, null, 2));
        }
      });
};

module.exports.analyze = analyze;
