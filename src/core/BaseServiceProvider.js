export default class BaseServiceProvider {
    constructor () {
        this.routes = [];
    }
    /**
     * 
     * map on routes in service provider adn call value [function]
     * 
     * @param {*} router 
     */
    mapRoutes(router) {
        if (!this.routes) return;
        for (let routeFunction of this.routes) {
            //call route file function
            routeFunction(router);
        }
    }

}