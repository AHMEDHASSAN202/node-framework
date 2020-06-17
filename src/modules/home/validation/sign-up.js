import Joi from '@hapi/joi';

const schema  = Joi.object({
    name: Joi.string().required().mix(20),
    email: Joi.string().required().email(),
    password: Joi.required().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
    password_convirmation: Joi.ref('password')
});


/**
 * Sign up Validate
 * 
 * @param {Object} fields 
 */
export function signUpValidation(fields) {
    return schema.validate(fields);
}


