import mongoose from 'mongoose';
import Wallet from './wallet.js';

const { Schema } = mongoose;

const Transaction = new Schema({
    to: {
        type: mongoose.Types.ObjectId,
        ref: 'wallets',
    },
    from: {
        type: mongoose.Types.ObjectId,
        ref: 'wallets',
    },
    amount: {
        type: Number,
    }
});

export default mongoose.model('transactions', Transaction);
