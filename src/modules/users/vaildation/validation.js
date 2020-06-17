import schema from './schema';

export function addUserVaildation(fieldsObject = {}) {
    return schema.validate(fieldsObject);
}