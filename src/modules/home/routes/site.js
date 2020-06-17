import sayHello from "../actions/home";

export default function HomeSiteRoutes(router) {
    router.get('', sayHello)
          .get('home', sayHello);   
}