export default function DeleteCategory(request, response) {
    return response.send('Delete Category Id: ' + request.params.id);
}