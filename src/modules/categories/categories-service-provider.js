import ServiceProvider from "../../core/providers/ServiceProvider";
import CategoriesSiteRoutes from "./routes/site";

class CategoriesServiceProviders extends ServiceProvider {
    routes = [
        CategoriesSiteRoutes
    ];
}

export default CategoriesServiceProviders; 