import mongoose from 'mongoose';

const { Schema } = mongoose;

const Wallet = new Schema({
    amount: {
        type: Number,
        required: true,
        default: 0,
    },
});

export default mongoose.model('wallets', Wallet);
