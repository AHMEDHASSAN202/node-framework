import mongoose from 'mongoose';

class DB {
    constructor () {
        this.databaseName = process.env.DATABASE_NAME;
        //mongodb://username:password@host:port/database?options...
        this.databaseUrl = 'mongodb://';
        this.databaseUrl += process.env.MONGO_USERNAME + ':' + process.env.MONGO_PASSWORD;
        this.databaseUrl += '@' + process.env.MONGO_HOST + ':' + process.env.MONGO_PORT;
        this.databaseUrl += '/' + this.databaseName;
    }

    connect() {
        mongoose.connect(this.databaseUrl, {useNewUrlParser: true, useUnifiedTopology: true})
                .then(
                    () => console.log('Mongoose is connected..'),
                    err => console.log('Error', err)
                    );
    }
}  

export default DB;