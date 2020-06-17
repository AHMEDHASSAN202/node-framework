export default function ShowCategory(request, response) {
    return response.send('Show Category Id: ' + request.params.id);
}