require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture bread tail tragic educate ranch remember essay grace hero fringe sense'; 
let testAccounts = [
"0x010e14c1164233eee0b2bb75fd23b65bd17c4b9fab172f5a5d2587b1842eab99",
"0x54463d6ce575eb7698ea55b42d6375d68b00ab73a369a30c3acafe9bb3625a14",
"0x871cc2eed56aeaa9655648966b3302d6cc2a1292727cab0bbc50ccaed1366724",
"0x1d25e2058887a44bbe3f5e0ff0f335cde021c97930bf409056774c95332ed3f5",
"0x6835e02d2c8bca8238da0ecbf0352a806ec6a63bf76a9e95b50856894b126310",
"0x1dc71b49a8e151033dd862b759e6f0a8fbd9ee65586013b3e1bec1d1dfe63069",
"0xcb84198b5c6eb45d09545c12bde4effed8c0aa8aeada51dc30ac73affd420d20",
"0x4f5c1e59126acc1b5af65b5b33c1902f124e5a6e395ad2c425a4e44fe8ef67f4",
"0x24f686990c91326c65d5c5b3d1c5c7104ff3da270f9d18ba740f814b651f5a17",
"0x275c576425531c7e1d45a64a5113032f48af9ded3c0c5a57735dd9b5383b5b1d"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

