const express = require('express');
const bodyParser = require('body-parser');
let app = express();
const mongoose = require('mongoose');
const github = require('../helpers/github.js');
const model = require('../database/index.js');

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());

app.post('/repos', (req, res) => {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  //console.log(req.body.userName)

  github.getReposByUsername(req.body.userName)
  .then((response) => {
    console.log('success got username', req.body.userName)
    response.data.forEach((repo) => {
      model.save(repo, (err) =>{
        if (err) {
          res.status(400).end();
        } else {
          res.status(200).send();
        }
      });
    })
  })

});

app.get('/repos', (req, res) => {
  // TODO - your code here!
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

