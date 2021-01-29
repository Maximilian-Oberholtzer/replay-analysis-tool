const { response } = require('express');
const express = require('express');
var unirest = require("unirest");
var request = require("request");
const path = require('path');
const multer = require('multer');
let upload = multer({storage: multer.memoryStorage() });
var FormData = require('form-data');
var fs = require('fs');

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

//Post a replay
app.post('/api/postreplay', upload.single('file'), (req, res) => {

  var replayData = {
    file: {
      value: req.file.buffer,
      options: {
        filename: req.file.originalname
      }
    }
  }
  const url = "https://ballchasing.com/api/v2/upload?visibility=public";
  
  request(
    url, {
      method: "POST",
      headers: {
        Authorization: `${token}`,
        'Content-Type': 'multipart/form-data'
      },
      formData: replayData,
    }, function(error, response, body) {
        res.send(body)
    }  
  )
})

//Get Ranks Data API
app.get('/api/getranks/:playerid', (req, res) => {
  const playerString = req.params.playerid.toString();
  const platform = playerString.substring(0, playerString.indexOf('+'));
  const id = playerString.substring(playerString.indexOf('+') + 1);
  const url = "https://api.yannismate.de/rank/" + platform + "/" + id;
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