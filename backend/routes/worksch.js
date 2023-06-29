const router = require('express').Router();
const { text } = require('express');
let Worksch = require('../models/worksch.model');

router.route('/').get((req, res) => {
  Worksch.find()
    .then(worksch => res.json(worksch))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  
  const date =  Date.parse(req.body.date);
  const starttime = String(req.body.starttime);
  const endtime = String(req.body.endtime);
  const empid = String(req.body.empid);
  const task = String(req.body.empid);
  


  const newWorksch = new Worksch({
   
    date,
    starttime,
    endtime,
    empid,
    task,
   
    
  });

  newWorksch.save()
  .then(() => res.json('added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/:id').get((req, res) => {
  Worksch.findById(req.params.id)
    .then(worksch => res.json(worksch))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
 Worksch.findByIdAndDelete(req.params.id)
    .then(() => res.json('deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});
module.exports = router;