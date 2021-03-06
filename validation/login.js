const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateLoginInput(data) {
  const errors = {};
  // first check if property is available in data i mean req.body
  let {
    userName,
  } = data;
  let {
    password,
  } = data;

  userName = !isEmpty(userName) ? userName : '';
  password = !isEmpty(password) ? password : '';


  // Check if any property is empty


  if (Validator.isEmpty(userName)) {
    errors.userName = 'userName is required';
  }

  if (Validator.isEmpty(password)) {
    errors.password = 'password field is required';
  }


  return {
    errors,
    isValid: isEmpty(errors),
  };
};
