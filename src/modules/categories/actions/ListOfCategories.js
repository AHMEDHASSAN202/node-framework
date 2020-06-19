import { Category } from "../db/CategorySchema";

export default async function ListOfCategories(request, response) {
    const categories = await Category.find().exec(); 
    return response.json(categories);
}