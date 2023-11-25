const Employee = require("../models/employee");

/* Add a New Employee */
const registerEmployee = async (req, res) => {
  const { email } = req.body;
  const findEmployee = await Employee.findOne({
    email: email,
  });
  if (findEmployee) {
    return res.status(409).json({
      status: false,
      message: "A Employee Already Exists with this Email",
    });
  }
  if (!findEmployee) {
    const createEmployee = await Employee.create(req.body);
    res.status(200).json({
      status: true,
      message: "Employee Added Successfully!",
      createEmployee,
    });
  } else {
    res.status(500).json({
      status: false,
      message: "Failed to Add Employee",
    });
  }
};
module.exports = {
  registerEmployee,
};
