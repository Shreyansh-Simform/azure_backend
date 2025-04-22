const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employeeController');

router.get('/employees', employeeController.getEmployees);
router.post('/employees/add', employeeController.addEmployee);
router.put('/employees/update', employeeController.updateEmployee);

module.exports = router;

