/* eslint-disable @typescript-eslint/naming-convention */
import Joi from 'joi';

const customAgeValidator = Joi.custom((value, helpers) => {
  if (typeof value !== 'number') {
    return helpers.error('number.invalid');
  }
  return value;
}, 'Número inválido');

const schema = Joi.object({
  name: Joi.string().required(),
  age: customAgeValidator.required(),
  phone: Joi.string().required(),
  state: Joi.string().required(),
  city: Joi.string().required(),
}).messages({
  'any.required': 'The {{#label}} field is mandatory.',
  'string.base': 'The {{#label}} field must be a string.',
  'number.base': 'The {{#label}} field must be a number.',
  'number.invalid': 'The {{#label}} field must be a number.',
});

export default schema;
