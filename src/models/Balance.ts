class Balance {
  income: number;

  outcome: number;

  total: number;

  date: Date;

  constructor({ income, outcome }: { income: number; outcome: number }) {
    this.date = new Date();
    this.income = income;
    this.outcome = outcome;
    this.total = income - outcome;
  }
}

export default Balance;
