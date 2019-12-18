const express = require('express');
const request = require('request');

const app = express();
const port = 1337;
const philipPort = 1729;
const johnPort = 3001;
const javPort = 3002;

app.use(express.static('dist', { index: 'productList.html' }));
app.use('/product/:productId', express.static('dist', { index: 'productPage.html' }));
app.use('/product/:productName/:productId', (req, res) => {
  res.redirect(`/product/${req.params.productId}`);
});

app.use(/\/api\/productPreview\/.*/, (req, res) => {
  request(`${req.protocol}://localhost:${philipPort}${req.originalUrl}`).pipe(res);
});

app.use(/\/api\/morestyles\/.*/, (req, res) => {
  request(`${req.protocol}://localhost:${johnPort}${req.originalUrl}`).pipe(res);
});

app.use(/\/reviews\/.*/, (req, res) => {
  request(`${req.protocol}://localhost:${javPort}${req.originalUrl}`).pipe(res);
});

app.listen(port, () => console.log(`Listening on port ${port}!`));
