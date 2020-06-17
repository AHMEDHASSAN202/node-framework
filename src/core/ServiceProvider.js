import ServiceProviderContainer from '../config/service-provider-container';
import { Router } from 'express';

class ServiceProvider {
    constructor() {
        //initial service providers array
        this.serviceProviders = [];
    }

    /**
     * create object from service provider and 
     * register it in serviceProviders array
     * 
     * @return void
     */
    boot() {
        for(let i = 0; i < ServiceProviderContainer.length; i++) {
            this.serviceProviders.push(new ServiceProviderContainer[i]);
        }
    }

    /**
     * loop in serviceProviders and call mapRoutes method for register routes
     * 
     * @param {Router} router 
     */
    registerRoutes(router) {
        for (let provider of this.serviceProviders) {
            provider.mapRoutes(router);
        }
    }
}


export default ServiceProvider;