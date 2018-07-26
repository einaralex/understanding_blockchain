import Block from './block';
export default class Blockchain {

    // Initialize the blockchain and add the genesisBlock
    public chain: any;



    constructor () {
        this.chain = [];
    }

    createGenesisBlock = () => {
        const index = 0;
        const previousHash = '0'.repeat(64);
        const transactions = ['Alice', 'Bob', '1BTC']; // TODO: (1) new Transaction(in,out,amount)
        const nonce = 1234;

        this.chain.push(new Block(index, Date.now(), previousHash, transactions, nonce));
    }

    getGenesisBlock = () => this.chain[0];

    getLatestBlock = () => this.chain[this.chain.length - 1];

    addBlock = (block: Block) => {
        block.previousHash = this.getLatestBlock().hash;
        block.hash = block.calculateHash();

        this.chain.push(block);
    }

    isChainValid = () => {

        for ( let block = 1; block < this.chain.length; block++ ) {

            const currentBlock = this.chain[block];
            const previousBlock = this.chain[block - 1];

            const isCurrentBlockValid = currentBlock.hash === currentBlock.calculateHash();
            const isPreviousBlockValid = currentBlock.previousHash === previousBlock.hash;

            if ( !isCurrentBlockValid || !isPreviousBlockValid ) {
                return false;
            }
        return true;
        }
    }
}