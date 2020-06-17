import BaseServiceProvider from "../../core/BaseServiceProvider";
import CategoriesSiteRoutes from "./routes/site";

class CategoriesServiceProviders extends BaseServiceProvider {
    constructor() {
        super();
        this.routes = [
            CategoriesSiteRoutes
        ];
    }
}

export default CategoriesServiceProviders; 