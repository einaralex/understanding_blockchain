export default class Transaction {

    from: string;
    to: string;
    amount: string;
    constructor(from: string, to: string, amount: string) {
        this.from = from;
        this.to = to;
        this.amount = amount;
    }
}