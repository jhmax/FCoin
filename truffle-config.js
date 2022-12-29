require("dotenv").config();

const PRIVATE_KEY = process.env.PRIVATE_KEY;

const HDWalletProvider = require('@truffle/hdwallet-provider');

module.exports = {
  networks: {
    fantom: {
      provider: () => 
      new HDWalletProvider(PRIVATE_KEY, `https://rpc.ftm.tools`),
      network_id: 250,
      chainId: 250,
      from: '0xB628bEA196DB7bD341d732A122179a5B4B595A1d',
    }    
  },
  compilers: {
    solc: {
      version: "0.8.17",    // Fetch exact version from solc-bin (default: truffle's version)
      settings: {          // See the solidity docs for advice about optimization and evmVersion
        optimizer: {
          enabled: true,
          runs: 9999
        },
        evmVersion: "byzantium"
      }
    }
  },
  plugins: [
    "truffle-plugin-verify"
  ],

  API_KEY: {
    ftmscan: "JNAE3K5EF397J65GE7CFUKCNCZDA467DZV"
  }
};
