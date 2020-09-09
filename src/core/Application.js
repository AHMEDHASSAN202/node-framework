import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import fileUpload from 'express-fileupload';
import ServiceProviderContainer from '../config/service-provider-container';
import router from './../core/Router';
import DB from './DB';

class Application {
    
    //initial value for serviceProviders Container Objects
    serviceProviders = [];
    
    //set router object
    router = router;

    constructor() {
        //prepare my server by express
        this.prepareServer();
        //set express app in my framework
        this.router.setExpressApp(this.express);
        //run global middlewares
        this.router.runGlobalMiddlewares(this.express);
        //initial application
        this.init();
    }

    init() {
        //load all service providers
        this.loadServiceProviders();
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
        //connect db
        (new DB).connect();
        //listen express app
        this.express.listen(process.env.PORT, function () {
            console.log(`Server is runing on port ${process.env.PORT}`);
        });
    }

     /**
      * Load Service Providers
      * create object from service provider and 
      * register it in serviceProviders array
      * 
      * @return void
      */
    loadServiceProviders() {
        for(let i = 0; i < ServiceProviderContainer.length; i++) {
            let SP = new ServiceProviderContainer[i](this);
            SP.boot();
            this.serviceProviders.push(SP);
        }
    }

}


export default Application;