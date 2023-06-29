const router = require('express').Router();
let Employee = require('../models/employee.model');

router.route('/').get((req, res) => {
  Employee.find()
    .then(employees => res.json(employees))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const contactNumber = Number(req.body.contactNumber);
  const nic = req.body.nic;
  const dateofbirth = Date.parse(req.body.dateofbirth);
  const address = req.body.address;
  const email = req.body.email;
  const password = Number(req.body.password);
  


  const newEmployee = new Employee({
    firstname,
    lastname,
    contactNumber,
    dateofbirth,
    nic,
    address,
    email,
    password,
  });

  newEmployee.save()
  .then(() => res.json('Employee added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/login').post((req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  Employee.findOne({ email: email, password: password })
    .then(employee => {
      if (employee) {
        res.status(200).json({ message: 'Login successful!' });
      } else {
        res.status(401).json({ message: 'Invalid email or password!' });
      }
    })
    .catch(err => res.status(400).json('Error: ' + err));
})

router.route('/:id').get((req, res) => {
  Employee.findById(req.params.id)
    .then(employee => res.json(employee))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Employee.findByIdAndDelete(req.params.id)
    .then(() => res.json('Employee deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').put((req, res) => {
  Employee.findById(req.params.id)
    .then(employee => {
        employee.firstname = req.body.firstname;
        employee.lastname = req.body.lastname;
        employee.contactNumber = Number(req.body.contactNumber);
        employee.dateofbirth = Date.parse(req.body.dateofbirth);
        employee.address = req.body.address;
        employee.email = req.body.email;


      employee.save()
        .then(() => res.json('Employee updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});
module.exports = router;

