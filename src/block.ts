import { SHA256 } from 'crypto-js';

export default class Block {

    index: number;              // The index of the current block in the chain.
    timestamp: number;            // When the block was created
    previousHash: string;       // The hash of the previous block
    hash: string;               // The hash of the current block
    transactions: string[];     // Information stored on the chain
    nonce: number;              // 32-bit (4-byte) 'Numbers used only once', this number is incremented to find the secret hash which is used to sign the block.

    constructor(index: number, timestamp: number, previousHash: string, transactions: string[], nonce: number) {
        this.index = index;
        this.timestamp = Date.now();
        this.previousHash = previousHash;
        this.nonce = nonce;
        this.transactions = transactions;
        this.hash = this.calculateHash();
    }

    addTransaction = (transaction: string) => this.transactions.push(transaction);

    /**
     * Calculate hash for each block.
     * @return {string} A hash value calculated from the information of the block
     */
    calculateHash = () =>
        SHA256(
            this.index +
            this.previousHash +
            this.timestamp +
            this.nonce +
            JSON.stringify(this.transactions)
        ).toString();
}