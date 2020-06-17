class Router {

    setExpressApp(express) {
        //express app object
        this.express = express;
    }

    _requestMethod(action, route, callback) {
        //sanitaize route url
        let url = this._url(route);
        //call express action method depending action
        this.express[action](url, function (request, response) {
            callback(request, response);
        })
        
        //chaining method
        return this;
    }

    _url(route) {
        route = route.trim();        
        if (!route.startsWith('/')) return '/' + route;
        return route;
    }

    /**
     * GET Route
     * 
     * @param {Router} route 
     * @param {Function} callback 
     */
    get(route, callback) {
        return this._requestMethod('get', route, callback);
    }

    /**
     * POST Route
     * 
     * @param {Router} route 
     * @param {Function} callback  
     */
    post(route, callback) {
        return this._requestMethod('post', route, callback);
    }

    /**
    * PUT Route
    * 
    * @param {Router} route 
    * @param {Function} callback
    */
    put(route, callback) {
        return this._requestMethod('put', route, callback);
    }

    /**
    * PATCH Route
    * 
    * @param {Router} route 
    * @param {Function} callback
    */
    patch(route, callback) {
        return this._requestMethod('patch', route, callback);
    }

    /**
    * DELETE Route
    * 
    * @param {Router} route 
    * @param {Function} callback
    */
    delete(route, callback) {
        return this._requestMethod('delete', route, callback);
    }

    /**
    * OPTIONS Route
    * 
    * @param {Router} route 
    * @param {Function} callback
    */
    options(route, callback) {
        return this._requestMethod('options', route, callback);
    }

    resource(route, actions) {
        return this._requestMethod('get', route, actions.List)
                   ._requestMethod('get', route + '/:id', actions.Show)
                   ._requestMethod('post', route , actions.Store)
                   ._requestMethod('put', route + '/:id', actions.Update)
                   ._requestMethod('delete', route + '/:id', actions.Delete);   
    }

}


export default new Router;