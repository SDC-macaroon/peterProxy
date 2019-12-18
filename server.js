const express = require('express');
const parser = require('body-parser');
const path = require('path');
const rp = require('request-promise-native');

const app = express();

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use(express.static('public'));


app.use('/product/:id', express.static('public'))

app.use('/api/:endpoint/:id', async (req, res) => {
  const { endpoint, id } = req.params;
  console.log(endpoint, id);
  await handleRequest(req, res, endpoint, id);
});

// John - Need to use relative paths (Add a '/' before all paths)
app.use('/product/:ignore/api/:endpoint/:id', async (req, res) => {
  const { endpoint, id } = req.params;
  console.log(endpoint, id);
  await handleRequest(req, res, endpoint, id);
});
// TODO..
// Javed 3002 || John 3001 || Philip 1729
// clone res.status
const handleRequest = async (req, res, endpoint, id) => {
  const servers = {morestyles:3001, reviews:3002, productPreview:1729}
  const port = servers[endpoint];
  const prefix = endpoint == 'morestyles' ? "product/ignore/" : ""
  const url = `http://localhost:${port}/${prefix}api/${endpoint}/${id}`
  const data =  await rp(url);
  // endpoint == 'morestyles' ? res.json(JSON.parse(data)).end() : res.send(data)
  res.send(data)
}

const port = process.env.PORT || 3003;

app.listen(port, console.log(`Server running on port: ${port}`));
