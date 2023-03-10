import React, { useEffect, useState } from 'react';
import Logo from '../../Logo/Logo3.jpg';
import './BookNow.css';
import { Link, useLocation } from "react-router-dom";

function BookNow() {
  const [packageData, setPackageData] = useState({});

  const location = useLocation();

  console.log(location.state);

  useEffect(() => {
    console.log(location.state);
    // setPackageData(state);
  }, []);

  return (
    <div className='container my-4 p-4 mx-auto'>
      <div className='row'>
        <div className="card col-md-4 border p-3">
          <h3 className='m-3 text-danger'>Package Details</h3>
          <img src={Logo} class="card-img-top" />
          <div className="card-body">
            <h5 className="card-title text-danger">TreXplore</h5>
            <p className="card-text text-success">Explore the Nature</p>
            <p className="card-text text-success">A brand in Trekking field</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item"><span className='card-detail'>Package Id:</span> Pack-1 </li>
            <li className="list-group-item"><span className='card-detail'>Trek Destination :</span> Sahyadri </li>
            <li className="list-group-item"><span className='card-detail'>Start Date :</span> 12-05-2023</li>
            <li className="list-group-item"><span className='card-detail'>End Date :</span> 25-05-2023</li>
            <li className="list-group-item"><span className='card-detail'>Duration :</span> 12 days</li>
            {/* <li className="list-group-item"><span className='card-detail'>Package Id :</span> {packageData.packId}</li> */}
            <li className="list-group-item"><span className='card-detail'>Price :</span><span className='card-detail-payment'> Rs.15,000/person </span></li>
          </ul>
        </div>

        <div className="card col-md-4 border p-3">
          <Link
            to="/paymentdetails"
            className="btn-outline-success bg-danger text-white font-weight-bold border border-2 rounded m-2 p-2"
          >
            Make Payment
          </Link>

          <Link
            to="/login"
            className="btn-outline-success bg-danger text-white font-weight-bold border border-2 rounded m-2 p-2"
          >
            Have Accout?
          </Link>

          <Link
            to="/register"
            className="btn-outline-success bg-danger text-white font-weight-bold border border-2 rounded m-2 p-2"
          >
            New User
          </Link>
        </div>
      </div>
    </div>
  )
}

export default BookNow
