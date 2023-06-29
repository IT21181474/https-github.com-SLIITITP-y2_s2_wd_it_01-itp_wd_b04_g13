import React , {useState , useEffect} from 'react'
import './update-order.css'
import api from '../../services/api'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

function OrderUpdate()
{
    const navigate =  useNavigate()
    const location = useLocation()
    const {id} = location.state

    useEffect(()=>{
        console.log(`recieved id is ${id}`);
        api.get(`/mongo/${id}`).then(response => setOrderDetails(response.data))
        console.log(orderDetails);
    }, [])

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
        navigate('/list')
    }

    // form handling function
    const processOrderFormHandler = async(e) => {
        e.preventDefault()
        console.log("Form is working");
        // setOrderDetails({...orderDetails , [e.target.name]:e.target.value})
        console.log(orderDetails);

        await api.put(`/mongo/${id}`,orderDetails).then((response)=>{
            console.log(response);
        })
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
                        <input value={orderDetails.packageID} name='packageID' onChange={processOrderInputHandler} type="text"className='order-reg-input-field' disabled></input>
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
                        <input value={orderDetails.senderTelephone} name="senderTelephone" onChange={processOrderInputHandler} type="text"className='order-reg-input-field'></input>
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
                        <input value={orderDetails.recipientTelephone} name="recipientTelephone" onChange={processOrderInputHandler} type="text" className='order-reg-input-field'></input>
                    </div>

                    <div className="input-container">
                        <label className="order-reg-label">Email</label>
                        <input value={orderDetails.recipientEmail} name="recipientEmail" onChange={processOrderInputHandler} type="email" className='order-reg-input-field'></input>
                    </div>

                    <div className="form-handling-btn-container">
                        <button type='submit' className="handling-btn">Update</button>
                        <button onClick={()=>{formReset()}} className="handling-btn">Back</button>
                        
                    </div>
                </div>
        </form>
    </div>
  )
}

export default OrderUpdate;