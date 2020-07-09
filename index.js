const express = require('express');
const app = express();

app.use(express.json()); // for parsing application/json


app.get('/', (req, res) => {
    console.log(req.method, req.path, ': ', req.body);
    console.log('Hello world received a request.');

  const target = process.env.TARGET || 'World';
  res.send(`Hello ${target}!`);
});

app.get('*', (req, res) => {
    console.log(req.method, req.path, ': ', req.body);
    res.status(404).send("Not found.");
});



const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log('Hello world listening on port', port);
});