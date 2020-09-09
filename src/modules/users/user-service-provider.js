import ServiceProvider from '../../core/providers/ServiceProvider'
import UserSiteRoutes from './routes/site';

class UserServiceProvider extends ServiceProvider {
    routes = [
        UserSiteRoutes
    ];
} 

export default UserServiceProvider;