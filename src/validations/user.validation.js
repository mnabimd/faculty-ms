const Joi = require('joi');
const { password } = require('./custom.validation');

const createUser = {
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().custom(password),
    name: Joi.string().required(),
    role: Joi.string().required().valid('user', 'admin'),
  }),
};

const getUsers = {
  query: Joi.object().keys({
    name: Joi.string(),
    role: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getUser = {
  params: Joi.object().keys({
    userId: Joi.string(),
  }),
};

const updateUser = {
  params: Joi.object().keys({
    userId: Joi.required(),
  }),
  body: Joi.object()
    .keys({
      email: Joi.string().email(),
      password: Joi.string().custom(password),
      name: Joi.string(),
    })
    .min(1),
};

const deleteUser = {
  params: Joi.object().keys({
    userId: Joi.string(),
  }),
};

const changePassword = {
  params: Joi.object().keys({
    userId: Joi.required(),
  }),
  body: Joi.object().keys({
    currentPassword: Joi.string().required().custom(password),
    newPassword: Joi.string().required().custom(password),
    confirmPassword: Joi.string().required().valid(Joi.ref('newPassword')).custom(password)
      .messages({ 'any.only': 'the new password and the confirm password must be same' }),
  }),
};


module.exports = {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
  changePassword,
};
