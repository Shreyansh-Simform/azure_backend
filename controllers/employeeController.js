const db = require('../models/db');

// Get All Employees
exports.getEmployees = (req, res) => {
  db.query('SELECT * FROM employees', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
};

// Add Employee
exports.addEmployee = (req, res) => {
  const { name, age, department } = req.body;
  const query = 'INSERT INTO employees (name, age, department) VALUES (?, ?, ?)';
  db.query(query, [name, age, department], (err) => {
    if (err) throw err;
    res.send('Employee Added');
  });
};

// Update Employee
exports.updateEmployee = (req, res) => {
  const { id, name, age, department } = req.body;
  const query = 'UPDATE employees SET name=?, age=?, department=? WHERE id=?';
  db.query(query, [name, age, department, id], (err) => {
    if (err) throw err;
    res.send('Employee Updated');
  });
};

