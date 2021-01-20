const { response } = require('express');
const express = require('express');
var unirest = require("unirest");
var request = require("request");
const path = require('path');

const app = express();

// token for ballchasing auth
const token = 'YYnAMB7jvHL6t5DnY7VkWrj7wuriCnff5UBTbUeK';

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'Frontend/build')));

if(process.env.NODE_ENV === 'production'){
  //set static folder
  app.use(express.static('Frontend/build'));
}

// Put all API endpoints under '/api'

//Get Replay Data API
app.get('/api/getreplay/:replayid', (req, res) => {
  const replayID = req.params.replayid;
  const url = "https://ballchasing.com/api/replays/" + replayID;
  request(
    url, {
      method: "GET",
      headers: {
        Authorization: `${token}`
      }
    }, function(error, response, body) {
         res.send(body)
       }  
  );
});

//Get Ranks Data API
app.get('/api/getranks/:playerid', (req, res) => {
  const playerID = req.params.playerid;
  const url = "https://api.yannismate.de/rank/steam/" + playerID;
  request(
    url, {
      method: "GET"
    }, function(error, response, body) {
        res.send(body)
      }
  );
});

app.get('*', (request, response) => {
  response.sendFile(path.join(__dirname, 'Frontend/build', 'index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Replay analysis tool listening on port: ${port}`);