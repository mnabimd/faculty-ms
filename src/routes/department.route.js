const express = require('express');
const auth = require('../middlewares/auth');
const validate = require('../middlewares/validate');
const departmentValidation = require('../validations/department.validation');
const departmentController = require('../controllers/department.controller');

const router = express.Router();

// Create department, get, update and delete a department
router
  .route('/')
  .post(auth('manageDepartments'), validate(departmentValidation.createDepartment), departmentController.createDepartment);

module.exports = router;
