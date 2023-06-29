const express = require('express')
const {getAllOrders , getSingleOrder , createOrder , updateOrder ,deleteOrder , getSingleOrderByMongo , updateOrderByMongoID} = require('../controller/orderController.js').default
const router = express.Router()

// get all orders
router.get("/",getAllOrders)

// get specific order
router.get("/:id",getSingleOrder)

// create a order
router.post("/",createOrder)

// update an order
router.put("/:id",updateOrder)

// delete an order
router.delete("/:id",deleteOrder)

// find order by mongo id
router.get("/mongo/:id", getSingleOrderByMongo)

// update order by mongo id
router.put("/mongo/:id", updateOrderByMongoID)

module.exports = router