import { Category } from './../db/CategorySchema';
import { StoreValidation } from '../validation/CategoryValidation';
import joiResponseError from '../../../core/JoiResponseError';

export default async function StoreCategory(request, response) {
    const {error, value} = StoreValidation(request.body);
    if (error) {
        return response.status(400).json(joiResponseError(error));
    }
    return await Category.create(value, (err, category) => {
        if (err) {
            return response.status(400).json("someting error!");
        }
        return response.status(200).json(category);
    })
}