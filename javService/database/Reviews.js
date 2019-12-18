const mongoose = require('mongoose');
const db = require('./index.js');

mongoose.Promise = global.Promise;

const reviewSchema = new mongoose.Schema({
  rating: Number,
  reviewTitle: String,
  reviewBody: String,
  reviewAuthor: String,
  reviewDate: Date,
});

const productSchema = new mongoose.Schema({
  productID: { type: Number, unique: true },
  reviews: [reviewSchema],
});

const productModel = mongoose.model('Product', productSchema);

const fetch = prodId => productModel.find({ productID: prodId }).exec();

module.exports.reviewModel = mongoose.model('Review', reviewSchema);
module.exports.productModel = productModel;
module.exports.fetch = fetch;
