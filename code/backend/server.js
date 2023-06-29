const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const orderRoutes = require('./routes/orderRoutes')

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json())

//mongo db connection
const uri = process.env.ATLAS_URI;
mongoose.connect (uri, { useNewUrlParser : true, useUnifiedTopology : true});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("Mongo DB connection established successfully");
})



const packageRouter = require('./routes/package');

app.use('/package', packageRouter);
app.use('/courier-mate/orders',orderRoutes)


app.listen(port, () => {
    console.log(`Server is running on port:-${port}`);
});