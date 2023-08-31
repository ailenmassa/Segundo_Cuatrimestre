
enum AccountTypeEnum {
    CuentaSueldo = "cuenta sueldo",
    CuentaDolares = "cuenta dólares",
    CuentaCorriente = "cuenta corriente",
}

class AccountType {
    private type:AccountTypeEnum;
    public constructor(type: AccountTypeEnum) {
        this.type = type;
      }
    }

class BankAccount {
    private owner:string;
    private balance:number;
    private accountType:AccountType;

   public constructor (owner:string, accountType:AccountTypeEnum){
    this.owner= owner;
    this.balance= 0;
    this.accountType= new AccountType(accountType);
   }

   public deposit (money:number):void{
    if (money > 0){
        this.balance += money;
   console.log ("usted deposito", money);
   }
   }

   public withdraw(money:number):void{
   if (this.balance = 0){
    console.log ("error");
   }
   else {
    this.balance -= money;
   console.log ("usted retiro", money);
   }
   }
   
   public getBalance():void{
    console.log (this.balance)
   }
}

const account1 = new BankAccount("ailen", AccountTypeEnum.CuentaDolares);
account1.deposit(100000);
account1.withdraw(5000);
account1.getBalance();

