import React, { useState } from 'react';
import axios from 'axios';
import Swal from "sweetalert2";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css"
//const shortid = require('shortid');


export default function AddPackage() {
    const [packageId, setPackageId] = useState('');
    const [item, setItem] = useState('');
    const [category, setCategory] = useState('');
    const [specialNotes, setSpecialNotes] = useState('');
    const [acceptedDate, setAcceptedDate] = useState('');
    const [acceptedTime, setAcceptedTime] = useState('');
    const [customerName, setcustomerName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [lostAndFound, setLostAndFound] = useState('');
    const [lostPlace, setLostPlace] = useState('');
    const [lostDate, setLostDate] = useState('');
    const [lostTime, setLostTime] = useState('');
    const handleDate = (date) => {
        setAcceptedDate(date)
        // Some logic
    }

    const postData = (e) => {

        e.preventDefault();
        
        //const packageId = shortid.generate();
        const packages = {
            packageId: packageId,
            item: item,
            category: category,
            specialNotes: specialNotes,
            acceptedDate: acceptedDate,
            acceptedTime: acceptedTime,
            customerName: customerName,
            address: address,
            phone: phone,
            lostAndFound: 'Secure',
            lostPlace: '',
            lostDate: '',
            lostTime: '',
        }
        console.log(packages);

        //validation

        if (item.length <= 3) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Item length is too short',
                color: '#f2220f',
                background: '#fff',
                showConfirmButton: true,
                confirmButtonText: 'Okay',
                confirmButtonColor: '#f2220f',

                iconColor: '#60e004',
                timer: 2800000
            })
        
        } else if (packageId.length >= 6) {

            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Package Id is Invalid',
                color: '#f2220f',
                background: '#fff',
                showConfirmButton: true,
                confirmButtonText: 'Okay',
                confirmButtonColor: '#f2220f',
                iconColor: '#60e004',
                timer: 2800000
            })    
        } else if (customerName.length <= 6) {

            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Customer Name is too short',
                color: '#f2220f',
                background: '#fff',
                showConfirmButton: true,
                confirmButtonText: 'Okay',
                confirmButtonColor: '#f2220f',
                iconColor: '#60e004',
                timer: 2800000
            })
        }
        else if (address.length <= 10) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Address is too short',
                color: '#f2220f',
                background: '#fff',
                showConfirmButton: true,
                confirmButtonText: 'Okay',
                confirmButtonColor: '#f2220f',
                iconColor: '#60e004',
                timer: 2800000
            })
        } else if (phone.length !== 10) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Invalid Phone Number',
                color: '#f2220f',
                background: '#fff',
                showConfirmButton: true,
                confirmButtonText: 'Okay',
                confirmButtonColor: '#f2220f',
                iconColor: '#60e004',
                timer: 2800000
            })
        }
        else {
            axios.post('http://localhost:5000/package/',
                packages,
            ).then(res => {
                console.log(res);
                if (res.status === 200) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Successful',
                        text: 'Package has been added!!Your Package ID is ' + packageId,
                        background: '#fff',
                        showConfirmButton: true,
                        confirmButtonText: 'Okay',
                        confirmButtonColor: '#0712e0',
                        iconColor: '#60e004',
                        timer: 2800000
                    })
                    // window.location = '/package'
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Error',
                        text: 'Error in adding!',
                        background: '#fff',
                        showConfirmButton: true,
                        confirmButtonText: 'Okay',
                        confirmButtonColor: '#f2220f',
                        iconColor: '#60e004',
                        timer: 2800000
                    })
                }
            })
        }
    }

    return (
        <div className="flex flex-col px-5 py-32 pt-2 scroll-m-1 scroll-smooth ">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                    <div className='items-center overflow-hidden'>
                        <div className=''>
                            <div class="grid grid-cols-1 gap-4 content-start pt-5 px-20">
                                <form className='px-12 py-12 border-2 rounded-lg shadow-md bg-gray-50' >
                                    <div class="">
                                       
                                        <p className='text-4xl' style={{textAlign: "center", color:"#000000"}} >Add Package</p>
                                        <p />
                                        <div className="grid grid-cols-2 gap-4 form-group">
                                            <div className="form-group">
                                                <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-dark'>
                                                    Package ID
                                                </label>
                                                <input type="text"
                                                    required
                                                    className="form-control"
                                                    onChange={(e) => setPackageId(e.target.value)}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-dark'>
                                                    Item
                                                </label>
                                                <input type="text"
                                                    required
                                                    className="form-control"
                                                    onChange={(e) => setItem(e.target.value)}
                                                />
                                            </div>
                                            <div class="">
                                                <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-dark' >
                                                    Category
                                                </label>
                                                <select
                                                    type="text"
                                                    required
                                                    className="form-control"
                                                    onChange={(e) => setCategory(e.target.value)}
                                                >
                                                    <option>Select From Here</option>
                                                    <option>Breakable Items</option>
                                                    <option>Electronics</option>
                                                    <option>Food Items</option>
                                                    <option>Freezer Items</option>
                                                    <option>Flowers</option>
                                                    <option>Other Items</option>
                                                </select>
                                            </div>
                                        </div>
                                        <p />
                                        <div className="grid grid-cols-1 gap-4 form-group">
                                            <div className="">
                                                <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-dark'>
                                                    Special Notes
                                                </label>
                                                <textarea type="text"
                                                    className="form-control"
                                                    onChange={(e) => setSpecialNotes(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <p />
                                        <div className="grid grid-cols-2 gap-4 form-group">
                                            <div class="form-group">
                                                <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-dark' >
                                                    Accepted Date
                                                </label>
                                                <DatePicker
                                                    viewBox="0 0 20 40"
                                                    dateFormat="MMMM d, yyyy"
                                                    selected={new Date()}
                                                    onChange={handleDate}
                                                />
                                            </div>
                                            <div className="">
                                                <label for="large-input" className='block mb-2 text-lg font-medium text-gray-900 dark:text-dark'>
                                                    Accepted Time
                                                </label>
                                                <input type="time"
                                                    className="form-control"
                                                    onChange={(e) => setAcceptedTime(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <p /><p />
                                        <div className="grid grid-cols-1 gap-4 form-group">
                                            <div className="form-group">
                                                <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-dark'>
                                                    Customer Name
                                                </label>
                                                <input type="text"
                                                    className="form-control"
                                                    onChange={(e) => setcustomerName(e.target.value)}
                                                />
                                            </div>
                                            <div class="">
                                                <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-dark' >
                                                    Delivery Address
                                                </label>
                                                <input type="text"
                                                    className="form-control"
                                                    onChange={(e) => setAddress(e.target.value)}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label for="large-input" className='block mb-2 text-lg font-medium text-gray-900 dark:text-dark'>
                                                    Phone Number
                                                </label>
                                                <input type="text"
                                                    className="form-control"
                                                    onChange={(e) => setPhone(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <div className="text-center align-middle form-group">
                                            <input className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mt-4 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800' type="submit" value="Add Package" onClick={postData} />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}