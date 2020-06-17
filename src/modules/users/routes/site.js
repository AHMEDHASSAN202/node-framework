import addUser from "../actions/add-user";

export default function UserSiteRoutes(router) {
    router.post('users', addUser);
} 