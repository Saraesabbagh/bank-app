
const Bank = require('./bank');

describe('bank test', ()=> {
    it('display the bank balance', ()=>{
        const BankNew = new Bank(500);
        expect(BankNew.balance).toEqual(500);
    });

    it('can add a deposited amount to create a new balance', ()=>{
        const BankNew = new Bank(100);
        BankNew.deposit(200);
        expect(BankNew.balance).toEqual(300);
    });

    it('can withdraw an amount and create a new lower balance', () =>{
        const BankNew = new Bank(500);
        BankNew.withdraw(200);
        expect(BankNew.balance).toEqual(300);
    });
});