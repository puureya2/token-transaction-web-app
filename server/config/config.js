// environment variables
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, "../.env") });


// server
const NODE_ENV = "development";
const CLIENT_PORT = "3000";
const SERVER_PORT = "5000";

// client
const SERVER_BASE_URL = "http://localhost:5000";
const CLIENT_BASE_URL = "http://localhost:3002";
const SOCKET_URL = "http://localhost:3003";
// export const BASE_URL = "http://87.237.52.168:3000";
// export const BASE_URL = "https://dispossessor.com/back";

// private keys
const JWT_SECRET = process.env.JWT_SECRET;
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const INFURA_API_KEY = process.env.INFURA_API_KEY;
const WALLET_PRIVATE_KEY = process.env.WALLET_PRIVATE_KEY;
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;

// URLs
const MONGO_URI = process.env.MONGO_URI;
const RPC_URL = `https://sepolia.infura.io/v3/${INFURA_API_KEY}`;

// contracts addresses
const TOKEN_FACTORY = process.env.TOKEN_FACTORY;
const ESTOKKYAM = process.env.ESTOKKYAM;

// paths
const STORAGE_BUILD = path.join(__dirname, "resource/build/1_Storage/resource_contracts_1_Storage_sol_Storage");


module.exports = {
    NODE_ENV, CLIENT_PORT, SERVER_PORT,
    SERVER_BASE_URL, CLIENT_BASE_URL, SOCKET_URL,
    MONGO_URI, RPC_URL,
    JWT_SECRET, GITHUB_TOKEN, INFURA_API_KEY, WALLET_PRIVATE_KEY, ETHERSCAN_API_KEY,
    TOKEN_FACTORY, ESTOKKYAM,
    STORAGE_BUILD
}
