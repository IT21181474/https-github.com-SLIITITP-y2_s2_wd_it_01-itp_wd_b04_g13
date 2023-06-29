import {FaHome} from 'react-icons/fa'
import {GoPackage} from 'react-icons/go'
import {MdOutlinePayments} from 'react-icons/md'
import {FaBinoculars} from 'react-icons/fa'
import {RiLoginBoxFill} from 'react-icons/ri'

const links = [
    {
        text: "Home",
        icon: <FaHome/>,
        link: ""
    },

    {
        text: "Orders",
        icon: <GoPackage/>,
        link: ""
    },

    {
        text: "Payment",
        icon: <MdOutlinePayments/>,
        link: ""
    },

    {
        text: "Tracking",
        icon: <FaBinoculars/>,
        link: ""
    },

    {
        text: "Login",
        icon: <RiLoginBoxFill/>,
        link: ""
    },
]

export default links