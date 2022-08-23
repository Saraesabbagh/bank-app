**Bank app**

*User stories*

1- client can make a deposit with amount and date.
2- Client can make a withdrawal with amount and date. 
3- Client can print her statement with list of transactions

*Design.*

What would you like to do?

1- Make a deposit?
2- Make a withdrawal?
3- Print your statement?

Would would you like to do?

Classes

Account - balance, transactions
constructors-
    balance, transactions

showBalance()
    this.balance
ShowStatement()



Transactions- amount,action(deposti/withdrawal)

constructor(date, amount) {
    this.date = date;
    this.amount= parseFloat(amount.toFixed(2));
    }
}
module.exports=Transaction





