const express = require('express');
const mongoose = require('mongoose');
const dotenv = require("dotenv")
const cors = require('cors');
const app = express();

require("dotenv").config();



const PORT = process.env.PORT || 5000;

app.use(cors())
app.use(express.json());

const URI = process.env.ATLASDB_URL;

mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


const connection = mongoose.connection

connection.once("open", () => {
  console.log('MongoDB Connection Success!!!')
})

const employeesRouter = require('./routes/employees');
app.use('/employees', employeesRouter);



const paysheetRouter = require('./routes/paysheet');
app.use('/paysheet', paysheetRouter);


const workschRouter = require('./routes/worksch');
app.use('/worksch',workschRouter);








app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
})