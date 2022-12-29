const ft = artifacts.require("FCoin");

module.exports = async function(deployer, accounts) {
    await deployer.deploy(ft)
    console.log("has been deployed")
  
};
