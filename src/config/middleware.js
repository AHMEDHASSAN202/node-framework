import AppModelMiddleware from "../middleware/AppModelMiddleware";
import CategoiesMiddleware from "../middleware/CategoiesMiddleware";

export default {
    globals: [AppModelMiddleware],
    routes: {
        'categoriesMiddleware': CategoiesMiddleware 
    }
};