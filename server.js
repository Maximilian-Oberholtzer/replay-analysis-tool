const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'Frontend/build')));

if(process.env.NODE_ENV === 'production'){
  //set static folder
  app.use(express.static('Frontend/build'));
}

// Put all API endpoints under '/api'
app.get('/test', (request, response) => {
    response.send('Hello World!');
  })

app.get('*', (request, response) => {
  response.sendFile(path.join(__dirname, 'Frontend/build', 'index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Replay analysis tool listening on port: ${port}`);