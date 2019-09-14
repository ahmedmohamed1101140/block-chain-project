const assert  = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());
const { interface , bytecode} =  require('../compile');



let accounts;
let inbox;
const INITAL_STRING = 'Hi There!';

beforeEach(async () => {
    //Get List of all accounts
    accounts = await web3.eth.getAccounts()

    inbox = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data: bytecode , arguments: [INITAL_STRING]})
            .send({
                from: accounts[0],
                gas: '1000000'
            })
});


describe('Inbox', () => {
    it('deployes a contract', () => {
        assert.ok(inbox.options.address);
        console.log(inbox);
    });

    it('has a default message', () => {
        const message = await inbox.methods.message().call();
        assert.equal(message, INITAL_STRING);
    });

    it('can change the message', async () => {
        await inbox.methods.setMessage('bye').send({
            from: accounts[0]
        });

        const message = await inbox.methods.message().call();
        assert.equal(message, 'bye');
    });
});