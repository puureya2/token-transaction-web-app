const mongoose = require('mongoose');

const TokenSchema = new mongoose.Schema({
  offer_id: {
    type: String,
    required: true,
    unique: true
  },
  offer_token: {
    type: String,
    required: true
  },
  buyer_id: {
    type: String,
    required: true
  },
  rate_of_return: {
    type: String
  },
  offer_yield: {
    type: String,
    required: true,
  },
  difference: {
    type: String,
    required: true
  },
  official_price: {
    type: String,
    required: true
  },
  asked_price: {
    type: String,
    required: true
  },
  difference_2: {
    type: String,
    required: true
  },
  stock: {
    type: String,
    required: true
  },
  seller_wallet_address: {
    type: String,
    required: true
  },

  contract_address: {
    type: String,
    required: true
  },
  creator: {
    type: String
  },
  deployment_timestamp: {
    type: String,
  },
  network: {
    type: String,
  },
});

module.exports = mongoose.model('token', TokenSchema);
