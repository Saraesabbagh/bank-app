class Account {
    constructor(){
        this.balance = 0;
        this.transactions =[];
    }

    showBalance(){
        return this.balance;
    }

    showTranscations(){
        return this.transactions;
    }

}

module.exports = Account;