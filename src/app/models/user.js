import mongoose from 'mongoose';
import Wallet from './wallet.js';

const { Schema } = mongoose;

const User = new Schema({
    name: {
        type: String,
        required: true,
    },
    key: {
        type: String,
        required: true,
    },
    accessToken: {
        type: String,
        required: true,
    },
    wallet: Wallet.schema,
});

export default mongoose.model('users', User);
