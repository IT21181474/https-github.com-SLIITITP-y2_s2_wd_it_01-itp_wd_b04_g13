import asyncHandler from 'express-async-handler'
import { find, create, findOne, findByIdAndUpdate, findByIdAndDelete, findById } from '../models/orderModel'

// method for get all orders
const getAllOrders = asyncHandler(
    async(req,res) => {

        const orders = await find().sort({createdAt: -1})

        if(orders){
            res.status(200).json(orders)
        }
        else{
            res.status(404).json({message: "no orders to display"})
        }
    }
)


// method for get a single order
const getSingleOrder = asyncHandler(
    async(req,res) => {

        const ID = req.params.id;

        const order = await find({packageID: ID})

        if(order){
            res.status(200).json(order)
        }
        else{
            res.status(404).json({message: "no order with that id"})
        }
    }
)


// method for create a single order
const createOrder = asyncHandler(
    async(req,res) => {
        
        const packageData ={
            packageID,
            senderName,
            senderAddress,
            senderPostalCode,
            senderCity,
            senderTelephone,
            senderEmail,
            parcelWeight,
            deliveryFee,
            recipientName,
            recipientAddress,
            recipientPostalCode,
            recipientCity,
            recipientTelephone,
            recipientEmail
        } = req.body

        const response = await create(packageData)
        
        if(response){
            res.status(200).json(response)
        }
        else{
            res.status(401).json({message: "order creation unsuccessful"})
        }
    }
)


// method for update an order
const updateOrder = asyncHandler(
    async(req,res) => {

        const ID = req.params.id 

        const searchingOrder = await findOne({packageID: ID})

        if(searchingOrder){
            
            const {_id} = searchingOrder
            
            const updatedOrder = await findByIdAndUpdate(_id , req.body , {new: true})
            res.status(200).json(updatedOrder)

        }
        else{
            res.status(404).json({message: "Order not found"})
        }

    }
)

// method for delete an order

const deleteOrder = asyncHandler(
    async(req,res) => {

        const ID = req.params.id

        const searchingID = await findOne({packageID: ID})

        if(searchingID){
            await findByIdAndDelete(searchingID._id)
            res.status(200).json({message:"order deleted"})
        }
        else{
            res.status(404).json({message: "order not found"})
        }
    }
)

// method for get an order by using  mongo id
const getSingleOrderByMongo = asyncHandler(
    async(req,res) => {

        const ID = req.params.id;

        const order = await findById(ID)

        if(order){
            res.status(200).json(order)
        }
        else{
            res.status(404).json({message: "no order with that id"})
        }
    }
)

// method for update an order using mongo ID
const updateOrderByMongoID = asyncHandler(
    async(req,res) => {

        const ID = req.params.id 

        const updatedOrder = await findByIdAndUpdate(ID , req.body , {new: true})

        if(searchingOrder){
            res.status(200).json(updatedOrder)
        }
        else{
            res.status(404).json({message: "Order not found"})
        }

    }
)



export default {getAllOrders , getSingleOrder , createOrder , updateOrder , deleteOrder , getSingleOrderByMongo , updateOrderByMongoID}

