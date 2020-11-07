import Balance from '../models/Balance';
import Transaction from '../models/Transaction';
import BalanceRepository from './BalanceRepository';

interface CreateTransaction {
  title: string;
  value: number;
  type: 'income' | 'outcome';
}

class TransactionsRepository {
  private transactions: Transaction[];

  private balanceRepository: BalanceRepository;

  constructor(balanceRepository: BalanceRepository) {
    this.transactions = [];
    this.balanceRepository = balanceRepository;
  }

  public all(): Transaction[] {
    return this.transactions;
  }

  public getBalance(): Balance {
    return this.balanceRepository.getBalance();
  }

  public create({ title, value, type }: CreateTransaction): Transaction {
    if (type === 'income') this.balanceRepository.addIncome(value);
    if (type === 'outcome') this.balanceRepository.addOutcome(value);

    const transaction: Transaction = new Transaction({
      title,
      value,
      type,
      total: this.balanceRepository.getBalance().total,
    });

    this.transactions.push(transaction);

    return transaction;
  }
}

export default TransactionsRepository;
