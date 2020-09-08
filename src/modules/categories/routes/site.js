import ListOfCategories from "../actions/ListOfCategories";
import ShowCategory from "../actions/ShowCategory";
import StoreCategory from "../actions/StoreCategory";
import UpdateCategory from "../actions/UpdateCategory";
import DeleteCategory from "../actions/DeleteCategory";

export default function CategoriesSiteRoutes(router) {
    let actions = {
        List: ListOfCategories,
        Show: ShowCategory,
        Store: StoreCategory,
        Update: UpdateCategory,
        Delete: DeleteCategory
    };
    router.resource('categories', actions, ['categoriesMiddleware']);
}