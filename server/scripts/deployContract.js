const { RPC_URL, WALLET_PRIVATE_KEY, STORAGE_BUILD } = require("../config/config.js");
const ethers = require("ethers");
const fs = require("fs-extra");


async function main() {

    const provider = new ethers.JsonRpcProvider(RPC_URL);
    const wallet = new ethers.Wallet(WALLET_PRIVATE_KEY, provider);
    console.log("Connected wallet address:", wallet.address);

    const abi = fs.readFileSync(`${storage_build}.abi`, "utf8");
    const binary = fs.readFileSync(`${storage_build}.bin`, "utf8");
    const contractFactory = new ethers.ContractFactory(abi, binary, wallet);
    
    console.log("Deploying, please wait...");
    contract = await contractFactory.deploy(
        // {
        //     gasPrice: 0,
        //     gasLimit: 0
        // }
    );
    console.log("Deployed");

    const deploymentReceipt = await contract.deployTransaction.wait(1);
    console.log(deploymentReceipt);
    
};


main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })

