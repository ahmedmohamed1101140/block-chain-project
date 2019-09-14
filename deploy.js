const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode} = require('./compile');

const provider = new HDWalletProvider(
    'language story duty master angle make gallery solve select such mention uniform',
    'rinkeby.infura.io/v3/4689b53faa2849faac29548d345e2b8d'
);


const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();
    
}