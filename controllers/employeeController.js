const sql = require('../models/db'); // your db.js should export the `sql` object

// Get All Employees
exports.getEmployees = async (req, res) => {
  try {
    const result = await sql.query`SELECT * FROM employees`;
    res.json(result.recordset);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

// Add Employee
exports.addEmployee = async (req, res) => {
  const { name, age, department } = req.body;
  try {
    await sql.query`
      INSERT INTO employees (name, age, department) 
      VALUES (${name}, ${age}, ${department})
    `;
    res.send('Employee Added');
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

// Update Employee
exports.updateEmployee = async (req, res) => {
  const { id, name, age, department } = req.body;
  try {
    await sql.query`
      UPDATE employees 
      SET name=${name}, age=${age}, department=${department} 
      WHERE id=${id}
    `;
    res.send('Employee Updated');
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

