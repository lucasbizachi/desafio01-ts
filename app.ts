import { PeopleAccount } from './class/PeopleAccount';
import { CompanyAccount } from './class/CompanyAccount';
//import { SpecialAccount } from './class/SpecialAccount';

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10);
console.log(peopleAccount);
peopleAccount.deposit(50);
peopleAccount.withdraw(20);
console.log(peopleAccount.getBalance());

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20);
console.log(companyAccount);
companyAccount.deposit(100);
companyAccount.getLoan(200);
companyAccount.withdraw(150);
console.log(companyAccount.getBalance());

//const specialAccount: SpecialAccount = new SpecialAccount('VIP', 30);
//console.log(specialAccount);
//specialAccount.deposit(100);
//specialAccount.withdraw(50);
//console.log(specialAccount.getBalance());