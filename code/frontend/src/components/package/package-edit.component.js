import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from "sweetalert2";
import { useHistory } from 'react-router';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css"

export default function EditPackage() {

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
    const [id, setID] = useState(null);

    useEffect(() => {
        console.log("View package is" + localStorage.getItem('PackageId'));
        setID(localStorage.getItem('Id'))
        setPackageId(localStorage.getItem('PackageId'));
        setItem(localStorage.getItem('Item'));
        setCategory(localStorage.getItem('Category'));
        setSpecialNotes(localStorage.getItem('SpecialNotes'));
        setAcceptedDate(localStorage.getItem('AcceptedDate'));
        setAcceptedTime(localStorage.getItem('AcceptedTime'));
        setcustomerName(localStorage.getItem('CustomerName'));
        setAddress(localStorage.getItem('Address'));
        setPhone(localStorage.getItem('Phone'));
        setLostAndFound(localStorage.getItem('LostAndFound'));
        setLostPlace(localStorage.getItem('LostPlace'));
        setLostDate(localStorage.getItem('LostDate'));
        setLostTime(localStorage.getItem('LostTime'));
        console.log("View package id" + setID(localStorage.getItem('Id')));
    }, []);

    const updateAPIData = (e) => {

        e.preventDefault();


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
            lostAndFound: lostAndFound,
            lostPlace: lostPlace,
            lostDate: lostDate,
            lostTime: lostTime,
        }
        console.log(packages);
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

        else if (lostAndFound.length <= 2) {

            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Invalid Lost And Found Values',
                color: '#f2220f',
                background: '#fff',
                showConfirmButton: true,
                confirmButtonText: 'Okay',
                confirmButtonColor: '#f2220f',
                iconColor: '#60e004',
                timer: 2800000
            })

        }
        else if (lostPlace.length <= 4) {


            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Invalid Lost Place',
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

            axios.put(`http://localhost:5000/package/${id}`, packages)
                .then(res => {

                    console.log(res.status);

                    if (res.status === 200) {

                        Swal.fire({
                            icon: 'success',
                            title: 'Successful',
                            text: 'Package has been Updated!!',
                            background: '#fff',
                            showConfirmButton: true,
                            confirmButtonText: 'Okay',
                            confirmButtonColor: '#0712e0',
                            iconColor: '#60e004',
                            timer: 2800000
                        })

                        window.location = '/package'


                    } else {
                        Swal.fire({
                            icon: 'error',
                            title: 'Error',
                            text: 'Error in updating!',
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

    const goBack = () => {
        window.location = "/package"
    }

    const handleDate = (date) => {
        setLostDate(date)
        // Some logic
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
                                    
                                        <p className='text-4xl' style={{textAlign: "center", color:"#000000"}} >Update Package</p>
                                        <p />
                                        <div className='grid grid-cols-1 gap-4 form-group'><p className='text-2xl font-semibold uppercase text-blue'>Package Details</p></div>
                                        <p />
                                        <div className="grid grid-cols-1 gap-4 form-group">
                                            <div class="">
                                                <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-dark'>
                                                    Package ID
                                                </label>
                                                <input type="text"
                                                    required
                                                    readOnly
                                                    className="form-control"
                                                    value={packageId}
                                                    // onChange={(e) => setPackageId(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <p />
                                        <div className="grid grid-cols-2 gap-4 form-group">
                                            <div className="form-group">
                                                <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-dark'>
                                                    Item
                                                </label>
                                                <input type="text"
                                                    required
                                                    className="form-control"
                                                    value={item}
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
                                                    value={category}
                                                    className="form-control"
                                                    onChange={(e) => setCategory(e.target.value)}
                                                >
                                                    <option>Select From Here</option>
                                                    <option>Breakable Items</option>
                                                    <option>Electronics</option>
                                                    <option>Food Items</option>
                                                    <option>Freezer Items</option>
                                                    <option>Flowers</option>
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
                                                    value={specialNotes}
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
                                                <input type="text"
                                                    readOnly
                                                    className="form-control"
                                                    value={acceptedDate.substring(0, 10)}
                                                    onChange={(e) => setAcceptedDate(e.target.value)}
                                                />
                                            </div>
                                            <div className="">
                                                <label for="large-input" className='block mb-2 text-lg font-medium text-gray-900 dark:text-dark'>
                                                    Accepted Time
                                                </label>
                                                <input type="text"
                                                    readOnly
                                                    className="form-control"
                                                    value={acceptedTime}
                                                    onChange={(e) => setAcceptedTime(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <p /><p />
                                        <div className='grid grid-cols-1 gap-4 form-group'><p className='text-2xl font-semibold uppercase text-blue'>Customer Details</p></div>
                                        <p />
                                        <div className="grid grid-cols-2 gap-4 form-group">
                                            <div className="form-group">
                                                <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-dark'>
                                                    Customer Name
                                                </label>
                                                <input type="text"
                                                    className="form-control"
                                                    value={customerName}
                                                    onChange={(e) => setcustomerName(e.target.value)}
                                                />
                                            </div>
                                            <div class="">
                                                <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-dark' >
                                                    Delivery Address
                                                </label>
                                                <input type="text"
                                                    className="form-control"
                                                    value={address}
                                                    onChange={(e) => setAddress(e.target.value)}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label for="large-input" className='block mb-2 text-lg font-medium text-gray-900 dark:text-dark'>
                                                    Phone Number
                                                </label>
                                                <input type="text"
                                                    className="form-control"
                                                    value={phone}
                                                    onChange={(e) => setPhone(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <p /><p />
                                        <div className='grid grid-cols-1 gap-4 form-group'><p className='text-2xl font-semibold uppercase text-blue'>Lost And Found Details</p></div>
                                        <p />
                                        <div className="grid grid-cols-2 gap-4 form-group">
                                            <div className="form-group">
                                                <label for="large-input" className='block mb-2 text-lg font-medium text-gray-900 dark:text-dark'>
                                                    Lost And Found
                                                </label>
                                                <select
                                                    type="text"
                                                    required
                                                    value={lostAndFound}
                                                    className="form-control"
                                                    onChange={(e) => setLostAndFound(e.target.value)}
                                                >

                                                    <option>Select From Here</option>
                                                    <option>Lost</option>
                                                    <option>Found</option>
                                                    <option>Secure</option>


                                                </select>
                                            </div>
                                            <div className="">
                                                <label for="large-input" className='block mb-2 text-lg font-medium text-gray-900 dark:text-dark'>
                                                    Lost Place
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    value={lostPlace}
                                                    onChange={(e) => setLostPlace(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <p />
                                        <div className="grid grid-cols-2 gap-4 form-group">
                                            <div className="form-group">
                                                <label for="large-input" className='block mb-2 text-lg font-medium text-gray-900 dark:text-dark'>
                                                    Lost Date
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
                                                    Lost Time
                                                </label>
                                                <input
                                                    type="time"
                                                    className="form-control"
                                                    value={lostTime}
                                                    onChange={(e) => setLostTime(e.target.value)}
                                                />
                                            </div>
                                        </div>

                                        <div className="text-center align-middle form-group">
                                            <input className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mt-4 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800' type="submit" value="Update Package" onClick={updateAPIData} />
                                        </div>
                                        <div className="text-center align-middle form-group">
                                            <input className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mt-4 dark:bg-blue-600 dark:hover:bg-red-200 focus:outline-none dark:focus:ring-blue-800' type="submit" value="Refund" onClick={updateAPIData} />
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