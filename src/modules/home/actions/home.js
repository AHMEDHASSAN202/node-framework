import Hooks from "../../../core/Hooks";

export default function sayHello(request, response) {
    Hooks.do_action('hello', 'Ahmed Hassan');
    return response.send('Home');
}