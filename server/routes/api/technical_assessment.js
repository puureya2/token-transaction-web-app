const express = require("express");
const router = express.Router();
const axios = require("axios");
const Token = require("../../models/Token.js");
const { ETHERSCAN_API_KEY } = require("../../config/config.js");


// get contract details from etherscan
async function getContractDetails(contract_address) {
    try {

        if (!contract_address) throw new Error("Contract address is required");

        // get creator data
        const transactionUrl = `https://api.etherscan.io/api?module=account&action=txlist&address=${contract_address}&startblock=0&endblock=99999999&sort=asc&apikey=${ETHERSCAN_API_KEY}`;
        const transactionResponse = await axios.get(transactionUrl);

        if (!transactionResponse.data.result || transactionResponse.data.result.length === 0) {
            throw new Error("0 transactions found for this contract");
        }

        // get first transaction
        const firstTransaction = transactionResponse.data.result[0];
        const creatorAddress = firstTransaction.from; // Sender of the first tx is the creator
        const blockNumber = firstTransaction.blockNumber;

        // get timestamp
        const blockUrl = `https://api.etherscan.io/api?module=block&action=getblockreward&blockno=${blockNumber}&apikey=${ETHERSCAN_API_KEY}`;
        const blockResponse = await axios.get(blockUrl);
        const deploymentTimestamp = blockResponse.data.result.timeStamp;

        return {
            contract_address: contract_address,
            creator: creatorAddress || "N/A",
            deployment_timestamp: new Date(deploymentTimestamp * 1000).toISOString(),
            network: "Ethereum Sepolia", // this is my testnet
        };
        
    } catch (error) {
        return { error: error.message || "Failed to fetch contract details" };
    }
}

// get route
router.get("/contract/:address", async (req, res) => {
    const { address } = req.params;

    if (!/^0x[a-fA-F0-9]{40}$/.test(address)) {
        return res.status(400).json({ error: "Invalid contract address" });
    }

    const contractDetails = await getContractDetails(address);

    if (contractDetails.error) {
        return res.status(500).json(contractDetails);
    }

    res.json(contractDetails);
});


///////////////////////////////////////////////////////////////////////////////////


// get contract details from mongodb
async function getContractDetailsDB(offer_id) {
  try {
    const token = await Token.findOne({offer_id});

    if (!token) {
      return 'There is no token for this id';
    }

    return token;

  } catch (err) {
    console.error(err.message);
  }
};

// get route
router.get("/contract/db/:offer_id", async (req, res) => {
    const { offer_id } = req.params;
    const contractDetailsDB = await getContractDetailsDB(offer_id);

    if (contractDetailsDB.error) {
        return res.status(500).json(contractDetailsDB);
    }

    res.json(contractDetailsDB);
});

// set route
router.post("/contract/db", async (req, res) => {
    try {
        const contractDetailsDB = req.body;
        const newToken = new Token(contractDetailsDB);
        const token = await newToken.save();
        res.json(token);

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// set route
router.delete("/contract/db/:offer_id", async (req, res) => {
    try {
        const { offer_id } = req.params;

        if (!offer_id) {
            return res.status(400).json({ error: "Offer ID is required" });
        }

        const deletedToken = await Token.findOneAndDelete({ offer_id });

        if (!deletedToken) {
            return res.status(404).json({ error: "Token not found" });
        }

        res.json({ message: "Token deleted successfully", deletedToken });

    } catch (err) {
        console.error("Delete Error:", err.message);
        res.status(500).json({ error: "Server Error" });
    }
});


module.exports = router;
