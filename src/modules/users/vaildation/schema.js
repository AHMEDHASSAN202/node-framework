import Joi from '@hapi/joi';

const schema = Joi.object({
    name: Joi.string().required().max(20).messages({'any.required': 'Blaaaaaaaaaa'}),
    username: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required().pattern(new RegExp(/^(?=.*\d).{4,8}$/)),
    password_confirmation: Joi.ref('password')
});


export default schema;