import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Swal from "sweetalert2";
import jsPDF from "jspdf";
import "jspdf-autotable";

export default function PackageList() {
    const [searchInput, setSearchInput] = useState('');
    const [filteredResults, setFilteredResults] = useState([]);
    const [APIData, setAPIData] = useState([]);
    const [packages, setPackages] = useState([]);


    useEffect(() => {


        axios.get(`http://localhost:5000/package/`)
            .then((response) => {
                setAPIData(response.data);
            })
    }, [])


    const getData = () => {
        axios.get(`http://localhost:5000/package/`)
            .then((getData) => {
                setAPIData(getData.data);
            })
    }

    const onDelete = (id) => {
        axios.delete(`http://localhost:5000/package/${id}`).then(response => {
            console.log(response.status)
          

            if (response.status === 200) {
                Swal.fire({
                    icon: 'success',
                    title: 'Successful',
                    text: "Package has been deleted!!",
                    background: '#fff',
                    confirmButtonColor: '#0a5bf2',
                    iconColor: '#60e004'
                })

                getData();
            }

            else {
                Swal.fire({
                    icon: 'Unsuccess',
                    title: 'Unsuccessfull',
                    text: "Package has not been deleted!!",
                    background: '#fff',
                    confirmButtonColor: '#eb220c',
                    iconColor: '#60e004'
                })
            }


        })
    }

    const setData = (data) => {

        let { _id, packageId, item, category, specialNotes, acceptedDate, acceptedTime, customerName, address, phone, lostAndFound, lostPlace, lostDate, lostTime } = data;

        localStorage.setItem('Id', _id);
        localStorage.setItem('PackageId', packageId);
        localStorage.setItem('Item', item);
        localStorage.setItem('Category', category);
        localStorage.setItem('SpecialNotes', specialNotes);
        localStorage.setItem('AcceptedDate', acceptedDate);
        localStorage.setItem('AcceptedTime', acceptedTime);
        localStorage.setItem('CustomerName', customerName);
        localStorage.setItem('Address', address);
        localStorage.setItem('Phone', phone);
        localStorage.setItem('LostAndFound', lostAndFound);
        localStorage.setItem('LostPlace', lostPlace);
        localStorage.setItem('LostDate', lostDate);
        localStorage.setItem('LostTime', lostTime);
        console.log("List data is" + localStorage.setItem('Item', item));
        console.log("List data is" + localStorage.setItem('CustomerName', customerName));
    }

    //search
    const searchItems = (searchValue) => {
        setSearchInput(searchValue)
        if (searchInput !== '') {
            const filteredData = APIData.filter((data) => {
                return Object.values(data).join('').toLowerCase().includes(searchInput.toLowerCase())
            })
            setFilteredResults(filteredData)
        }
        else {
            setFilteredResults(APIData)
        }
    }


    const exportPackages = () => {
        console.log("Export PDF")


        const unit = "pt";
        const size = "A3";
        const orientation = "portrait";
        const marginLeft = 40;
        const doc = new jsPDF(orientation, unit, size);

        const title = "Courier Mate-Package List Report";
        const headers = [["Package ID", "Item", "Category", "Special Notes", "Accepted Date", "Accepted Time", "Customer Name", "Address", "Phone Number", "Lost And Found", "Lost Place", "Lost Date", "Lost Time"]];
        

        const pack = APIData.map(
            data => [
                data.packageId,
                data.item,
                data.category,
                data.specialNotes,
                data.acceptedDate,
                data.acceptedTime,
                data.customerName,
                data.address,
                data.phone,
                data.lostAndFound,
                data.lostPlace,
                data.lostDate,
                data.lostTime
            ]
        );

        let content = {
            startY: 50,
            head: headers,
            body: pack
        };
        doc.setFontSize(20);
        doc.text(title, marginLeft, 40);
        require('jspdf-autotable');
        doc.autoTable(content);
        doc.save("Package-Report.pdf")
    }

    return (
        <div>
            <div className="flex flex-col px-5 py-32 pt-2 scroll-m-1 scroll-smooth ">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                        <div className='items-center overflow-hidden'>
                            <div class="grid grid-cols-1 gap-4 content-start">
                                <table className=''>

                                    <tr>
                                        <br/><p className='text-4xl' style={{textAlign: "center", color:"#000000"}} >Package Details List</p><br/>
                                        
                                        <td className='flex justify-end gap-2'>
                                            <div class="flex justify-end sm:flex-row sm:text-left sm:justify-end gap-2">
                                                <button class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                                                    <Link className='font-semibold text-white no-underline' to={"/addPackage"}>
                                                        Add Package
                                                    </Link></button>
                                                <button class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={exportPackages}>
                                                    Download Report Here
                                                </button>
                                            </div>

                                            <div class="flex justify-end sm:flex-row sm:text-left sm:justify-end">
                                                <input
                                                    className="form-control rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
                                                    type="text"
                                                    required
                                                    icon='search'
                                                    placeholder='Filter By ID, Item, Address'
                                                    onChange={(e) => searchItems(e.target.value)}
                                                />


                                            </div>

                                        </td>
                                    </tr>
                                </table>
                            </div>

                            <div className='relative grid content-start grid-cols-1 gap-4 overflow-x-auto shadow-md sm:rounded-lg'>
                                <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>




                                    <thead className='p-5 text-xs text-gray-700 uppercase border bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                                        <tr>
                                            <th className="p-2 border-black tbhead ">Package ID</th>
                                            <th className="p-2 tbhead">Item</th>
                                            <th className="p-2 tbhead">Special Notes</th>
                                            <th className="p-2 tbhead">Address</th>
                                            <th className="p-2 tbhead">Lost And Found</th>
                                            <th className="p-2 tbhead">View More</th>
                                            <th className="p-2 tbhead">Update</th>
                                            <th className="p-2 tbhead">Delete</th>
                                        </tr>
                                    </thead>


                                    <tbody>
                                        {/* search list */}
                                        {searchInput.length > 1 ? (
                                            filteredResults.map((data) => {
                                                if (searchInput === data.packageId || data.item.includes(searchInput) || data.address.includes(searchInput)) {
                                                    return (
                                                        <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
                                                            <td className='px-6 py-4'>{data.packageId}</td>
                                                            <td className='px-6 py-4'>{data.item}</td>
                                                            <td className='px-6 py-4'>{data.specialNotes}</td>
                                                            <td className='px-6 py-4'>{data.address}</td>
                                                            <td className='px-6 py-4'><span
                                                                class="text-base inline-block whitespace-nowrap rounded-full min-w-max bg-yellow-400 p-1 hover:bg-yellow-500 hover:drop-shadow-md hover:text-white  px-2 pt-[0.35em] pb-[0.25em] text-center align-baseline text-[0.75em] font-bold leading-none text-primary-700">{data.lostAndFound}</span></td>
                                                            <td className='px-6 py-4'>
                                                                <div class="flex justify-center">
                                                                    <div class="">

                                                                        <Link to='/viewPackage'><button className='inline-flex items-center px-4 py-2 ml-1 text-sm font-medium text-white duration-100 bg-green-700 rounded-md hover:bg-blue-200' onClick={() => setData(data)}>
                                                                            <div class=" grid grid-cols-2 gap-1 hover:text-black duration-100">
                                                                                <div class="">
                                                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                                                    </svg>
                                                                                </div>
                                                                                <div class="">
                                                                                    View
                                                                                </div>
                                                                            </div>
                                                                        </button></Link>
                                                                    </div></div></td>

                                                            <td className='px-6 py-4'>
                                                                <div class="flex justify-center">
                                                                    <div class="">

                                                                        <Link to='/editPackage'><button className='inline-flex items-center px-4 py-2 ml-1 text-sm font-medium text-white duration-100 bg-indigo-500 rounded-md hover:bg-blue-200' onClick={() => setData(data)}>
                                                                            <div class=" grid grid-cols-2 gap-1 hover:text-black duration-100">
                                                                                <div class="">
                                                                                    <svg class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                                        <path stroke-linecap="round" stroke-linejoin="round " stroke-width="2" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"></path>
                                                                                    </svg>
                                                                                </div>
                                                                                <div class="">
                                                                                    Update
                                                                                </div>
                                                                            </div>
                                                                        </button></Link>
                                                                    </div></div></td>

                                                            <td className='px-6 py-4'>
                                                                <div class="flex justify-center">
                                                                    <div class="">

                                                                        <button className='inline-flex items-center px-4 py-2 ml-1 text-sm font-medium text-white duration-100 bg-red-500 rounded-md hover:bg-red-200' onClick={() => onDelete(data._id)}>
                                                                            <div class=" grid grid-cols-2 gap-1 hover:text-black duration-100">
                                                                                <div class="">
                                                                                    <svg class="h-5 w-5 mr-2 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                                                    </svg>
                                                                                </div>
                                                                                <div class="">
                                                                                    Delete
                                                                                </div>
                                                                            </div>
                                                                        </button>
                                                                    </div></div></td>

                                                        </tr>
                                                    )
                                                }
                                            })
                                        ) : (
                                            APIData.map((data) => {

                                                return (
                                                    <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
                                                        <td className='px-6 py-4'>{data.packageId}</td>
                                                        <td className='px-6 py-4'>{data.item}</td>
                                                        <td className='px-6 py-4'>{data.specialNotes}</td>
                                                        <td className='px-6 py-4'>{data.address}</td>
                                                        <td className='px-6 py-4'><span
                                                            class="text-base inline-block whitespace-nowrap rounded-full bg-yellow-400 p-1 hover:bg-yellow-500 hover:drop-shadow-md hover:text-white  px-2 pt-[0.35em] pb-[0.25em] text-center align-baseline text-[0.75em] font-bold leading-none text-primary-700">{data.lostAndFound}</span></td>
                                                        <td className='px-6 py-4'>
                                                            <div class="flex justify-center">
                                                                <div class="">

                                                                    <Link to='/viewPackage'><button className='inline-flex items-center px-4 py-2 ml-1 text-sm font-medium text-white duration-100 bg-green-700 rounded-md hover:bg-blue-200' onClick={() => setData(data)}>
                                                                        <div class=" grid grid-cols-2 gap-1 hover:text-black duration-100">
                                                                            <div class="">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                                                </svg>
                                                                            </div>
                                                                            <div class="">
                                                                                View
                                                                            </div>
                                                                        </div>
                                                                    </button></Link>
                                                                </div></div></td>

                                                        <td className='px-6 py-4'>
                                                            <div class="flex justify-center">
                                                                <div class="">

                                                                    <Link to='/editPackage'><button className='inline-flex items-center px-4 py-2 ml-1 text-sm font-medium text-white duration-100 bg-indigo-500 rounded-md hover:bg-blue-200' onClick={() => setData(data)}>
                                                                        <div class=" grid grid-cols-2 gap-1 hover:text-black duration-100">
                                                                            <div class="">
                                                                                <svg class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                                    <path stroke-linecap="round" stroke-linejoin="round " stroke-width="2" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"></path>
                                                                                </svg>
                                                                            </div>
                                                                            <div class="">
                                                                                Update
                                                                            </div>
                                                                        </div>
                                                                    </button></Link>
                                                                </div></div></td>

                                                        <td className='px-6 py-4'>
                                                            <div class="flex justify-center">
                                                                <div class="">

                                                                    <button className='inline-flex items-center px-4 py-2 ml-1 text-sm font-medium text-white duration-100 bg-red-500 rounded-md hover:bg-red-200' onClick={() => onDelete(data._id)}>
                                                                        <div class=" grid grid-cols-2 gap-1 hover:text-black duration-100">
                                                                            <div class="">
                                                                                <svg class="h-5 w-5 mr-2 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                                                </svg>
                                                                            </div>
                                                                            <div class="">
                                                                                Delete
                                                                            </div>
                                                                        </div>
                                                                    </button>
                                                                </div></div></td>


                                                    </tr>
                                                )

                                            })
                                        )}
                                    </tbody>


                                </table>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}