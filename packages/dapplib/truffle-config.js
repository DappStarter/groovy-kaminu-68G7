require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess nature swift undo name remember mad pudding hover praise army genuine'; 
let testAccounts = [
"0x098f36fbd34b54aff5b6f565c71bdabab65b37e8ef00b3ffed0693688594d7bd",
"0xd23794d97c1f2861affa721bf35a02151f16472ee5c6695134d3ed88ad0c4c69",
"0x371bfc839f8008c83742682e7ddafc3eb6061cc9e2c7e3cfae1674d76b0dc4ce",
"0x82cbedc16ca004f35f97d946552a5773b7384c6164e79fc1e11ded9a51ffaeff",
"0xad63f2aebe892ef9f679f2be1ec7324335e32baec3c123580f7ac34ded262354",
"0x3cc51684900ba4be5a5bd40ad4e493fed209a0ec8c6f2c8ab67d901d2d4e9b6b",
"0xdc11e774ccec0381023435c37a34e3202bcd00b46fa4d71a42e7851b2953e375",
"0x3a27473ea8dae76f8c41fb06df948d5a9b6cd092c5d6e2ce4025abd53e627715",
"0x415e780896b4fc5e9627dc4c944312a93b91caf2b39e1fadcd3e54566f406f11",
"0x9f7e84334b7989fc8733bf8d6e7e2b6131c5223cd9e5b1da8bf1e439fadc4162"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

