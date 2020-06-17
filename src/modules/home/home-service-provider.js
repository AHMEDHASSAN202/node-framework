import HomeSiteRoutes from "./routes/site";
import BaseServiceProvider from "../../core/BaseServiceProvider";


class HomeServiceProvider extends BaseServiceProvider {
    constructor () {
        super();
        this.routes = [
            HomeSiteRoutes
        ];
    }
}

export default HomeServiceProvider;