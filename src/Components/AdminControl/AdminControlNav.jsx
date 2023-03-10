import React from 'react';
import { Link } from 'react-router-dom';
import './AdminControl.css';


function AdminControlNav() {
    return (
        <div>
            <div className='list-group border border-2 admincontrol-bg'>
                <Link className='list-group-item list-group-item-action font-weight-bold active text-white'>Modify</Link>
                <Link to='/admincontrol/packages' className='list-group-item list-group-item-action admincontrol-bg'>Packages</Link>
                <Link to='/admincontrol/customers' className='list-group-item list-group-item-action admincontrol-bg'>Customers</Link>
                <Link to='/admincontrol/hotelservices' className='list-group-item list-group-item-action admincontrol-bg'>Hotel Services</Link>
                <Link to='/admincontrol/gearshops' className='list-group-item list-group-item-action admincontrol-bg'>Gear Shops</Link>
                <Link to='/admincontrol/tourguides' className='list-group-item list-group-item-action admincontrol-bg'>Tour Guides</Link>
            </div>
        </div>
    )
}

export default AdminControlNav
