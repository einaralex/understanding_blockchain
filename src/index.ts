import Block from './block';
import Blockchain from './blockchain';
import Transaction from './transaction';

// Initialize the blockchain
const blockchain = new Blockchain();

// Add hardcoded blocks
blockchain.createGenesisBlock();
blockchain.addBlock(new Block(1, new Date(), '0'.repeat(64), ['0'], 0));
blockchain.addBlock(new Block(2, new Date(), '0'.repeat(64), ['123'], 2));

console.log(JSON.stringify(blockchain, undefined, 4));

console.log('Valid chain? Should be true:' + blockchain.isChainValid());

// Manipulate the first block.
blockchain.chain[0].transactions = ['Alice', 'Bob', '2BTC'];

console.log('Valid chain? Should be false:' + blockchain.isChainValid());