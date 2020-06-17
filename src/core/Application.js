import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import fileUpload from 'express-fileupload';
import ServiceProvider from './ServiceProvider';
import router from './../core/Router';

class Application {


    constructor() {
        //prepare my server by express
        this.prepareServer();
        //initial appication 
        this.init();
        //set express app in my framework
        router.setExpressApp(this.express);
    }

    init() {
        //create object of main service provider
        this.serviceProvider = new ServiceProvider;
        //create objects of all service providers 
        //on config/service-provider-container file
        this.serviceProvider.boot();
    }

    prepareServer() {
        //register dotenv config
        dotenv.config();
        //set proprty express app
        this.express = express();
        //cors middleware
        this.express.use(cors());
        //bodyParser middleware for body params
        this.express.use(bodyParser.urlencoded({extended: true}));
        //fileupload middleware
        this.express.use(fileUpload({ 
            useTempFiles : true,
            tempFileDir : '/../tmp/'
        }));
    }

    run() {
        //register all routes from service providers
        this.serviceProvider.registerRoutes(router);
        //listen express app
        this.express.listen(process.env.PORT, function () {
            console.log(`Server is runing on port ${process.env.PORT}`);
        });
    }


}


export default Application;