//let Block = require('./block')
import Block from './block'
//import SHA256 from 'crypto-js/sha256';
//var SHA256 = require("crypto-js/sha256");
export default class Blockchain {

    //initialize the blockchain and add the genesisBlock
    chain: any;
    
    constructor ()  {
        this.chain = [this.createGenesisBlock()]
    }

    createGenesisBlock = () => {
        return new Block(0, new Date() , '0'.repeat(64), ['0'],0)
    }

    addBlock = (block: Block) => {
        /*
        this.chain.length === 0 
            ? block.previousHash  = '0'.repeat(64)
            : block.hash          = this.generateHash(block);*/
        block.previousHash = this.getPreviousBlock().hash;
        block.hash = block.calculateHash()
        block.nonce = 0
        this.chain.push(block)
    }

    isChainValid = () => {

        for ( let b = 1; b < this.chain.length; b ++){
            if (this.chain[b].hash !== this.chain[b].calculateHash())
            {
                return false
            }
            if (this.chain[b].previousHash !== this.chain[b-1].hash)
            {
                return false
            }
        }
        // Object.keys(this.chain).forEach((b) => {
        //     if (this.chain[b].hash !== this.chain[b].calculateHash())
        //     {
        //         return false
        //     }
        //     if (this.chain[b].previousHash !== this.chain[b-1].hash)
        //     {
        //         return false
        //     }
        //     //this.chain[b].hash !== this.chain[b].calculateHash() || false;
        //     //this.chain[b].previousHash !== this.chain[b-1] || false;
        // })
        return true
    }
   /* generateNextBlock (transactions) {

        let block = new Block()

        //Blockheader :       Version(4)+hashPrevBlock(32)+hashMerkleRoot(32)+Time(4)+Bits(4)+Nonce(4)

        transactions.forEach((transaction) => block.addTransaction(transaction));

        let previousBlock   = this.getPreviousBlock()
        block.index         = this.chain.length
        block.previousHash  = previousBlock.hash
        block.hash      = this.generateHash(block)

        return block
    }*/

    /*generateRootHash (block)  {

        let rootHash = block.calculateRootHash();

        while (!rootHash.startsWith('0000')) {
            block.nonce += 1
            rootHash = block.calculateRootHash();
        }
        return rootHash
    }*/

    getPreviousBlock = () => this.chain[this.chain.length - 1];


}