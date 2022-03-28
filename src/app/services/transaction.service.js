import Transaction from '../models/transaction.js';
import Wallet from '../models/wallet.js';
import User from '../models/user.js';

export default class TransactionService {
    async transact(transaction) {
        const fromWallet = await this.findWalletByKey(transaction.from);
        if (!fromWallet.wallet) {
            throw new Error('Unexpected error');
        }

        const newFromAmount = parseFloat(fromWallet.wallet.amount) - parseFloat(transaction.amount);
        
        if (newFromAmount < 0) {
            throw new Error('Insufficient funds');
        }

        await Wallet.updateOne({ _id: fromWallet.wallet._id }, { $set: { amount: newFromAmount } });
        fromWallet.wallet.amount = newFromAmount;
        await fromWallet.save();

        const toWallet = await this.findWalletByKey(transaction.to);
        const newToAmount = parseFloat(transaction.amount) + parseFloat(toWallet.wallet.amount);
        await Wallet.updateOne({ _id: toWallet.wallet._id }, { $set: { amount: newToAmount } });
        toWallet.wallet.amount = newToAmount;
        await toWallet.save();

        const transactionToCreate = new Transaction({
            to: toWallet.wallet._id,
            from: fromWallet.wallet._id,
            amount: transaction.amount,
        });

        return await transactionToCreate.save();
    }

    async findWalletByKey(key) {
        const user = await User.findOne({ key });

        if (!user) {
            throw new Error('Key not found');
        }

        return user;
    }
}
