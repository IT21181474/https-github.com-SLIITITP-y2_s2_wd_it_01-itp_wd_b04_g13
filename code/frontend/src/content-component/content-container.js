import React from 'react'
import './content-container.css'
import {Router , Routes , Route , Link} from 'react-router-dom'
// importing rendering components
import RegForm from '../order-form-component/orderRegister'
import OrderList from '../order-list-component/OrderList'
import UpdateOrder from '../update-component/update-order'

function ContentContainer() {
  return (
    <div className='main-container'>
        {/* <RegForm/> */}
        {/* <OrderList/> */}
        <Routes>
          <Route path='/' element={<RegForm/>} />
          <Route path='/list' element={<OrderList/>} />
          <Route path='/update-order' element={<UpdateOrder/>} />
        </Routes>
    </div>
  )
}

export default ContentContainer