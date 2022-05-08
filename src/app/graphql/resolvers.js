import UserService from '../services/user.service.js';
import TransactionService from '../services/transaction.service.js';

export const resolvers = {
    Query: {
        getUser: async (root, { accessToken }) => {
            const userService = new UserService();

            return await userService.getUser(accessToken);
        },
    },
    Mutation: {
        createUser: async (root, { input }) => {
            const userService = new UserService();

            return await userService.create(input);
        },
        transact: async (root, { input }) => {
            const transactionService = new TransactionService();

            return await transactionService.transact(input);
        }
    }
}