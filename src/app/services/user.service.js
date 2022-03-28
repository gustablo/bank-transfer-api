import User from '../models/user.js';
import Wallet from '../models/wallet.js';

export default class UserService {

    async create(user) {
        const wallet = new Wallet({
            amount: 100,
        });

        const createdWallet = await wallet.save();

        const userToCreate = new User({
            name: user.name,
            key: user.key,
            accessToken: Date.now().toString(36),
            wallet: createdWallet,
        });

        const createdUser = await userToCreate.save();

        return createdUser;
    }

    async getUser(accessToken) {
        const user = await User.findOne({ accessToken });

        return user;
    }

}
