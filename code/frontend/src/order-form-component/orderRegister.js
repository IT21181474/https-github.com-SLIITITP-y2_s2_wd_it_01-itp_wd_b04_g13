import React , {useState} from 'react'
import './orderRegister.css'
import api from '../../services/api'
import { Link } from 'react-router-dom'
function OrderRegister() {

    const [orderDetails , setOrderDetails] = useState({
            packageID : "",
            senderName : "",
            senderAddress : "",
            senderPostalCode : "",
            senderCity : "",
            senderTelephone : "",
            senderEmail : "",
            parcelWeight : "",
            deliveryFee : "",
            recipientName : "",
            recipientAddress : "",
            recipientPostalCode : "",
            recipientCity : "",
            recipientTelephone : "",
            recipientEmail : ""
    })

    const formReset = () => {
        setOrderDetails({
            packageID : "",
            senderName : "",
            senderAddress : "",
            senderPostalCode : "",
            senderCity : "",
            senderTelephone : "",
            senderEmail : "",
            parcelWeight : "",
            deliveryFee : "",
            recipientName : "",
            recipientAddress : "",
            recipientPostalCode : "",
            recipientCity : "",
            recipientTelephone : "",
            recipientEmail : ""
    })
    }

    // form handling function
    const processOrderFormHandler = (e) => {
        e.preventDefault()
        
        if(orderDetails.packageID === ''){
            alert("package id is necessary")
        }
        else{
            console.log("Form is working");
        setOrderDetails({...orderDetails , [e.target.name]:e.target.value})
        console.log(orderDetails);

        api.post("/",orderDetails).then((response)=>{
            console.log(response.data);
        })

            alert("form submitted successfully!")
        }
    }

    const processOrderInputHandler = (e) => {
        setOrderDetails({...orderDetails , [e.target.name]:e.target.value})
    }

  return (
    <div className="reg-form-container">
        <span className="main-prompt">
            Enter your address and the recipient's to address
        </span>
        <form onSubmit={processOrderFormHandler} className='form-stylings'>
                {/* sender details */}
                <div className="input-columns">

                    {/* column heading */}
                    <span className="column-heading">
                        From Address
                    </span>

                    <div className="input-container">
                        <label className="order-reg-label">Package ID</label>
                        <input value={orderDetails.packageID} name='packageID' onChange={processOrderInputHandler} type="text"className='order-reg-input-field'></input>
                    </div>

                    <div className="input-container">
                        <label className="order-reg-label">Sender Name</label>
                        <input value={orderDetails.senderName} name="senderName"  onChange={processOrderInputHandler} type="text"className='order-reg-input-field'></input>
                    </div>

                    <div className="input-container">
                        <label className="order-reg-label">Address</label>
                        <input value={orderDetails.senderAddress} name="senderAddress" onChange={processOrderInputHandler} type="text"className='order-reg-input-field'></input>
                    </div>

                    <div className="input-container">
                        <label className="order-reg-label">Postal Code</label>
                        <input value={orderDetails.senderPostalCode} name="senderPostalCode" onChange={processOrderInputHandler} type="text"className='order-reg-input-field'></input>
                    </div>

                    <div className="input-container">
                        <label className="order-reg-label">City</label>
                        <input value={orderDetails.senderCity} name="senderCity" onChange={processOrderInputHandler} type="text"className='order-reg-input-field'></input>
                    </div>

                    <div className="input-container">
                        <label className="order-reg-label">Phone Number</label>
                        <input value={orderDetails.senderTelephone} name="senderTelephone" onChange={processOrderInputHandler} type="text"className='order-reg-input-field' pattern='[0-9]{10}'></input>
                    </div>

                    <div className="input-container">
                        <label className="order-reg-label">Email</label>
                        <input value={orderDetails.senderEmail} name="senderEmail" onChange={processOrderInputHandler} type="emai" className='order-reg-input-field'></input>
                    </div>

                    <div className="input-container">
                        <label className="order-reg-label">Parcel Weight</label>
                        <input value={orderDetails.parcelWeight} name="parcelWeight" onChange={processOrderInputHandler} type="text"className='order-reg-input-field'></input>
                    </div>

                    <div className="input-container">
                        <label className="order-reg-label">Delivery Fee</label>
                        <input value={orderDetails.deliveryFee} name="deliveryFee" onChange={processOrderInputHandler} type="text"className='order-reg-input-field'></input>
                    </div>
                </div>
                {/* divider */}
                <div className="divider"></div>
                {/* reciever details */}
                <div className="input-columns">

                    {/* column heading */}
                    <span className="column-heading">
                        To Address
                    </span>

                    <div className="input-container">
                        <label className="order-reg-label">Recipent Name</label>
                        <input value={orderDetails.recipientName} name="recipientName" onChange={processOrderInputHandler} type="text" className='order-reg-input-field'></input>
                    </div>

                    <div className="input-container">
                        <label className="order-reg-label">Address</label>
                        <input value={orderDetails.recipientAddress} name="recipientAddress" onChange={processOrderInputHandler} type="text" className='order-reg-input-field'></input>
                    </div>

                    <div className="input-container">
                        <label className="order-reg-label">Postal Code</label>
                        <input value={orderDetails.recipientPostalCode} name="recipientPostalCode" onChange={processOrderInputHandler} type="text" className='order-reg-input-field'></input>
                    </div>

                    <div className="input-container">
                        <label className="order-reg-label">City</label>
                        <input value={orderDetails.recipientCity} name="recipientCity" onChange={processOrderInputHandler} type="text" className='order-reg-input-field'></input>
                    </div>

                    <div className="input-container">
                        <label className="order-reg-label">Phone Number</label>
                        <input value={orderDetails.recipientTelephone} pattern='[0-9]{10}' name="recipientTelephone" onChange={processOrderInputHandler} type="text" className='order-reg-input-field'></input>
                    </div>

                    <div className="input-container">
                        <label className="order-reg-label">Email</label>
                        <input value={orderDetails.recipientEmail} name="recipientEmail" onChange={processOrderInputHandler} type="email" className='order-reg-input-field' required></input>
                    </div>

                    <div className="form-handling-btn-container">
                        <button type='submit' className="handling-btn">Submit</button>
                        <button onClick={formReset} className="handling-btn">Clear</button>
                        
                            <Link to="/list">
                                <button className="handling-btn-link">View Orders</button>
                            </Link>
                        
                    </div>
                </div>
        </form>
    </div>
  )
}

export default OrderRegister