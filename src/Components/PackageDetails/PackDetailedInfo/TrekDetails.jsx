import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './TrekDetails.css';

function TrekDetails(props) {

    const [trekdetails, setTrekDetails] = useState({});


    useEffect(() => {
        setTrekDetails(props.detailedDetails);
    }, []);


    const renderTrekDetails = Object.keys(trekdetails).map(key =>
    (
        <li className='trekdetail-li'>
            <span className='trekdetail-subtitle'>{key}</span>
            <span className='trekdetail-info'>{trekdetails[key]}</span>
        </li>
    )
    );

    return (
        <div>
            <div className='container my-4'>
                <h3 className='trekdetails-title mb-3'>Trek Detailed Information</h3>
                <ul className='trekdetail-ul'>
                    {renderTrekDetails}
                </ul>
            </div>

            <div className='container my-4'>
                <Link
                    to={{ pathname: `/booknow/${trekdetails.packId}`, state: { package: trekdetails } }}
                    className="btn-outline-white bg-success text-white border border-2 rounded p-1"
                >
                    Book Now
                </Link>

                <Link
                    to="/"
                    className="btn-outline-success bg-danger text-white font-weight-bold border border-2 rounded m-2 p-2"
                >
                    Go Back
                </Link>

            </div>
        </div>


    )
}

export default TrekDetails;
