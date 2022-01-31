

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url:'https://eth-ropsten.alchemyapi.io/v2/ciuhCJ_lNMNccdSG_JycE3iGdoF_z0Au',
      accounts:['e59ee0f0896e91ee9acdad7cb8a03f8bef22630b52dca833072dcf2f391c4772']
    }
  }
}