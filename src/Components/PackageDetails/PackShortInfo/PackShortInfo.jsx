import React, { useEffect, useState } from 'react';
import './PackShortInfo.css';

function PackShortInfo(props) {
    const [packageData, setPackageData] = useState({});

    useEffect(() => {
        setPackageData(props.detailedDetails);
    }, []);
    console.log(packageData);

    return (
        <div className='container-fluid pack-short my-3'>
            <div className='row'>
                <div className='col-sm m-2 p-2 pack-short-box'>
                    <p className='pack-short-title'>Geography</p>
                    <p><span className='pack-short-subtitle'>Altitude :</span> {packageData.altitude}</p>
                    <p><span className='pack-short-subtitle'>Grade :</span> {packageData.grade}</p>
                    <p><span className='pack-short-subtitle'>Duration :</span>  {packageData.duration}</p>
                    <p><span className='pack-short-subtitle'>Trekking KM :</span> {packageData.trekkingKm}</p>
                </div>

                <div className='col-sm pack-short-box m-2 p-2'>
                    <p className='pack-short-title'>Suitable for</p>
                    <p><span className='pack-short-subtitle'>Exprience needed :</span>Pre-Training, Daily Excercise</p>
                    <p><span className='pack-short-subtitle'>Fitness :</span>No BP,Athama issue</p>
                </div>

                <div className='col-sm pack-short-box m-2 p-2'>
                    <p className='pack-short-title'>Package</p>
                    <p><span className='pack-short-subtitle'>Price:</span> {packageData.price}</p>
                    <p><span className='pack-short-subtitle'>GST:</span> +5% GST</p>
                </div>

                <div className='col-sm pack-short-box m-2 p-2'>
                    <p className='pack-short-title'>Help & Support</p>
                    <p><span className='pack-short-subtitle'>Address:</span>  Official complex, CDAC, Pune</p>
                    <p><span className='pack-short-subtitle'>Contact :</span>  9810402050</p>
                    <p><span className='pack-short-subtitle'>Email :</span>  trexplore.official@gmail.com</p>

                </div>
            </div>
        </div>
    )
}

export default PackShortInfo;
