import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import ServiceProvider from './service-provider';

class Application {


    constructor() {

        this.prepareServer();
        this.init();

    }


    init() {
        let serviceProvider = new ServiceProvider;
        serviceProvider.boot();
    }


    prepareServer() {
        dotenv.config();
        this.express = express();
        this.express.use(cors());
        this.express.use(bodyParser.urlencoded({extended: true}));
    }


    run() {
        this.express.get('/', (request, response) => {
            response.send('Hello World');
        });


        this.express.listen(process.env.PORT, function () {
            console.log(`Server is runing on port ${process.env.PORT}`);
        });
    }


}


export default Application;