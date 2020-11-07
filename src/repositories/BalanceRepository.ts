import Balance from '../models/Balance';

class BalanceRepository {
  private balance: Balance;

  constructor() {
    this.balance = new Balance({ income: 0, outcome: 0 });
  }

  private fix(): void {
    this.balance.income = Number.parseFloat(this.balance.income.toFixed(2));
    this.balance.outcome = Number.parseFloat(this.balance.outcome.toFixed(2));
    this.balance.total = Number.parseFloat(this.balance.total.toFixed(2));
  }

  public getBalance(): Balance {
    return this.balance;
  }

  public addIncome(value: number): Balance {
    this.balance.income += value;
    this.balance.total += value;
    this.fix();
    return this.balance;
  }

  public addOutcome(value: number): Balance {
    this.balance.outcome += value;
    this.balance.total -= value;
    this.fix();
    return this.balance;
  }
}

export default BalanceRepository;
