class Bank {
    constructor(balance){
        this.balance = balance;
        this.statement = [];
        
    }

    balance(){
        return this.balance;
    }

    deposit(amount, date){
        this.balance += amount;
        this.statement.push({date:date, amount: amount,  balance: this.balance});

    }

    withdraw(amount, date){
        this.balance -= amount;
        this.statement.push({date: date, amount: amount, balance: this.balance});
    }

    statement(){
        console.log(date || amount || balance);
        this.statement.reverse(this.statement.date);
        this.statement.forEach(() => {
            console.log(`$(action.date) || $(action.amount) || $(action.balance) `);
        });
    }
}

module.exports = Bank;