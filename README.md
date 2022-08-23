# Bank tech test

This is my attempt for the bank- app challenge. 

## Installation
-Download the repo
-Do npm install
-enter Node. 
- copy and paste code from bank.js
-create some transactions
-hit statement(); and Voila!


### Requirements

* You should be able to interact with your code via a REPL like IRB or Node.  (You don't need to implement a command line interface that takes input from STDIN.)
* Deposits, withdrawal.
* Account statement (date, amount, balance) printing.
* Data can be kept in memory (it doesn't need to be stored to a database or anything).

### Acceptance criteria

**Given** a client makes a deposit of 1000 on 10-01-2023  
**And** a deposit of 2000 on 13-01-2023  
**And** a withdrawal of 500 on 14-01-2023  
**When** she prints her bank statement  
**Then** she would see

```
date || credit || debit || balance
14/01/2023 || || 500.00 || 2500.00
13/01/2023 || 2000.00 || || 3000.00
10/01/2023 || 1000.00 || || 1000.00
```

### Self Assessment/ Troubleshooting
-For some reason i couldn't get the whole file to run in node without copy and pasting so given more time i would work that out. 
- I would have liked a more elegant soultion than a console log for the headers in the statement appearing. 
-the code submitted is relativley clean and i believe it hits the user stories