import React , {useEffect , useState} from 'react'
import RegForm from '../../components/order-form-component/orderRegister'
import { Link } from 'react-router-dom'
import api from '../../services/api'
import './OrderList.css'
import { useNavigate } from 'react-router-dom'
import {AiOutlineSearch} from 'react-icons/ai'
function OrderList() {

    const navigate = useNavigate()
    
    const sendUpdateRequest = (id) => {
        navigate("/update-order" , {state:{id}})
    }

  const [orderList , setOrderList] = useState([])
  const [prompt , setPrompt] = useState("")
  useEffect(()=>{
    api.get("/").then((response) => {
        setOrderList(response.data)
    })
    .catch((error) => console.log(error))
  }, [])  


  return (
    <div className="order-reader-container">

    <span className='list-heading'>Order List</span>
    <Link to="/" >
        <button>Add another order</button>
    </Link>

    
    <div className="search-container">
        <input type="text" className="search-field" value={prompt} onChange={(e)=>{setPrompt(e.target.value)}}/>
        <button className='search-btn' onClick={()=>{
            console.log(prompt);
            api.get(`/${prompt}`).then((response)=>{
                setOrderList(response.data)
            })
        }}><AiOutlineSearch/></button>
    </div>
        {
            orderList.map((singleOrder , index) => {

                const{
                    _id,
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
                } = singleOrder


                const newObj = {
                    pID : "1214",
                    // senderName,
                    // senderAddress,
                    // senderPostalCode,
                    // senderCity,
                    // senderTelephone,
                    // senderEmail,
                    // parcelWeight,
                    // deliveryFee,
                    // recipientName, 
                    // recipientAddress,
                    // recipientPostalCode,
                    // recipientCity,
                    // recipientTelephone,
                    // recipientEmail
                }

                return(
                    <div className="single-order-details" key={index}>
                        <div className="container-labels">
                            <span className="display-cont-labels">Package ID</span>
                            <span className="display-cont-labels">Sender Name</span>
                            <span className="display-cont-labels">Sender Address</span>
                            <span className="display-cont-labels">Sender Post Code</span>
                            <span className="display-cont-labels">Sender City</span>
                            <span className="display-cont-labels">Sender Telephone</span>
                            <span className="display-cont-labels">Sender Email</span>
                            <span className="display-cont-labels">Parcel Weight</span>
                            <span className="display-cont-labels">Delivery Fee</span>
                            <span className="display-cont-labels">Recipient Name</span>
                            <span className="display-cont-labels">Recipient Address</span>
                            <span className="display-cont-labels">Recipient Post Code</span>
                            <span className="display-cont-labels">Recipient City</span>
                            <span className="display-cont-labels">Recipient Telephone</span>
                            <span className="display-cont-labels">Recipient Email</span>
                        </div>
                        <div className="order-data">
                            <span className="display-cont-labels-data">{packageID}</span>
                            <span className="display-cont-labels-data">{senderName}</span>
                            <span className="display-cont-labels-data">{senderAddress}</span>
                            <span className="display-cont-labels-data">{senderPostalCode}</span>
                            <span className="display-cont-labels-data">{senderCity}</span>
                            <span className="display-cont-labels-data">{senderTelephone}</span>
                            <span className="display-cont-labels-data">{senderEmail}</span>
                            <span className="display-cont-labels-data">{parcelWeight}</span>
                            <span className="display-cont-labels-data">{deliveryFee}</span>
                            <span className="display-cont-labels-data">{recipientName}</span>
                            <span className="display-cont-labels-data">{recipientAddress}</span>
                            <span className="display-cont-labels-data">{recipientPostalCode}</span>
                            <span className="display-cont-labels-data">{recipientCity}</span>
                            <span className="display-cont-labels-data">{recipientTelephone}</span>
                            <span className="display-cont-labels-data">{recipientEmail}</span>
                        </div>
                        <div className="btn-container">


                                <button className="update-btn" onClick={()=>{sendUpdateRequest(_id)}}>Update</button>

                            <button className='delete-btn' onClick={()=>{
                                api.delete(`/${packageID}`).then((res)=>{
                                    console.log(res.data);
                                })

                                const filteredOrders = orderList.filter((object)=>{
                                    return packageID !== object.packageID
                                })
                                setOrderList(filteredOrders)
                            }}>Delete</button>
                        </div>
                    </div>
                )

            })
        }
    </div>
  )
}

export default OrderList