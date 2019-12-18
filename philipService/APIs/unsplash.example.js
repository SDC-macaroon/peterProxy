const Unsplash = require('unsplash-js').default;
global.fetch = require('node-fetch');

const accessKey = 'UNSPLASH ACCESS KEY GOES HERE';

module.exports = new Unsplash({ accessKey });
