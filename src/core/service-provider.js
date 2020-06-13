import ServiceProviderContainer from '../config/service-provider-container';

class ServiceProvider {
    constructor() {
        this.serviceProviders = [];
    }

    boot() {
        for(let i = 0; i < ServiceProviderContainer.length; i++) {
            this.serviceProviders.push(new ServiceProviderContainer[i]);
        }
    }
}


export default ServiceProvider;