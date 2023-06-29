const router = require('express').Router();
let Paysheet = require('../models/paysheet.model');

router.route('/').get((req, res) => {
  Paysheet.find()
    .then(paysheet => res.json(paysheet))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  
  const noOfDays = Number(req.body.noOfDays);
  const regularOt = Number(req.body.regularOt);
  const specialHolidays = Number(req.body.specialHolidays);
  const totalOtPay = Number(req.body.totalOtPay);
  const otherPay = Number(req.body.otherPay);
  const loan = Number(req.body.loan);
  const deduction = Number(req.body.deduction);
  const otherDeduction = Number(req.body.otherDeduction);
  const totalDeduction = Number(req.body.totalDeduction);
  const netPay = Number(req.body.netPay);


  const newPaysheet = new Paysheet({
   
    
    noOfDays,
    regularOt,
    specialHolidays,
    totalOtPay,
    otherPay,
    loan,
    deduction,
    otherDeduction,
    totalDeduction,
    netPay,
  });

  newPaysheet.save()
  .then(() => res.json('added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/:id').get((req, res) => {
  Paysheet.findById(req.params.id)
    .then(paysheet => res.json(paysheet))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Paysheet.findByIdAndDelete(req.params.id)
    .then(() => res.json('deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});
module.exports = router;