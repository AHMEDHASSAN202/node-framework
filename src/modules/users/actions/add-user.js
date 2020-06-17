import { addUserVaildation } from "../vaildation/validation";
import joiResponseError from "../../../core/JoiResponseError";

export default function addUser(request, response) {
    let {error, value} = addUserVaildation(request.body)
    
    if (error) {
        return response.status(400).json(joiResponseError(error));
    }

    return response.json(value);
} 