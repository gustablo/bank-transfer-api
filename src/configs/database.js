import mongoose from 'mongoose';

export const connect = () => {
    mongoose.connect('mongodb://db:27017/bank-transfer', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(_ => console.log('Database connected')).catch(console.err);

    mongoose.set('debug', true);
}
