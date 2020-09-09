import HomeSiteRoutes from "./routes/site";
import ServiceProvider from "../../core/providers/ServiceProvider";
import Hooks from "../../core/Hooks";
import hello from './hooks/hello';

class HomeServiceProvider extends ServiceProvider {
    routes = [
        HomeSiteRoutes
    ];
    
    register() {
        Hooks.add_action('hello', hello);
    }
}

export default HomeServiceProvider;