import sayHello from "../actions/home";

export default function HomeSiteRoutes(router) {
    router.get('', sayHello);
    router.get('home', sayHello); 
}