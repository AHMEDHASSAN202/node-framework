import BaseServiceProvider from '../../core/BaseServiceProvider'
import UserSiteRoutes from './routes/site';

class UserServiceProvider extends BaseServiceProvider {
    constructor() {
        super();
        this.routes = [
            UserSiteRoutes
        ];
    }
} 

export default UserServiceProvider;