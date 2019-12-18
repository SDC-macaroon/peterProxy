const mongoose = require('mongoose');
const faker = require('faker');
const { Product } = require('./database.js');
const unsplash = require('../APIs/unsplash.js');

const productIdStart = 2001;
const productCount = 100;
const animals = ['dog', 'cat', 'bear', 'rabbit'];
const colours = ['black', 'brown', 'white', 'grey'];
const hex = {
  black: 0x000000,
  brown: 0x8b4513,
  white: 0xffffff,
  grey: 0x808080,
};
const perPage = 30;

const urls = {};
Promise.all(colours.reduce((terms, colour) => [
  ...terms,
  ...animals.map(animal => {
    urls[animal] = {};
    return unsplash.search.photos(`${colour} ${animal}`, 1, perPage)
      .then(result => result.json())
      .then(json => { urls[animal][colour] = json.results.map(result => result.urls.regular); });
  }),
], []))
  .then(() => Product.deleteMany())
  .then(() => Product.bulkWrite(
    [...Array(productCount)]
      .map((_, i) => i + productIdStart)
      .map(productId => {
        const animal = animals[Math.floor(Math.random() * animals.length)];
        const csi = Math.floor(Math.random() * colours.length * 2); // Colour Slice Index
        return {
          productId,
          productName: `${faker.name.firstName()} the ${animal}`,
          colours: [...colours.slice(0, csi), ...colours.slice(csi + 1)].map(colourName => {
            let start = Math.floor(Math.random() * perPage);
            return {
              colourName,
              colour: hex[colourName],
              logoUrl: urls[animal][colourName][start],
              frontUrl: urls[animal][colourName][++start % perPage],
              backUrl: urls[animal][colourName][++start % perPage],
            };
          }),
        };
      })
      .map(document => ({ insertOne: { document } })),
  ))
  .catch(err => console.error(err.message))
  .finally(() => mongoose.connection.close());
