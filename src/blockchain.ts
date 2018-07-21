import Block from './block';
export default class Blockchain {

    // Initialize the blockchain and add the genesisBlock
    chain: any;

    constructor () {
        this.chain = [];
    }

    createGenesisBlock = () => {
        const index = 0;
        const previousHash = '0'.repeat(64);
        const transactions = ['Alice', 'Bob', '1BTC']; // TODO: (1) new Transaction(in,out,amount)
        const nounce = 1234;

        this.chain.push(new Block(index, new Date(), previousHash, transactions, nounce));
    }

    addBlock = (block: Block) => {
        const previousBlock = this.chain[this.chain.length - 1];
        block.previousHash = previousBlock.hash;

        this.chain.push(block);
    }

    isChainValid = () => {

        for ( let b = 1; b < this.chain.length; b++ ) {
            if (this.chain[b].hash !== this.chain[b].calculateHash()) {
                return false;
            }
            if (this.chain[b].previousHash !== this.chain[b - 1].hash) {
                return false;
            }
        }
        return true;
    }
}