import './Package.css';
import Logo from '../../../Logo/Logo3.jpg';
import { Link } from "react-router-dom";
import { useState } from 'react';


const Package = (props) => {

    const [packData, setPackData] = useState(props.pack);

    console.log(packData);

    return (
        <div className="col-md-3">
            <div className='my-4'>
                <div class="card card1">
                    <img src={Logo} class="card-img-top" />
                    <div class="card-body">
                        <h5 class="card-title pack-short-title">{packData.packageName}</h5>
                        <div className='text-success pack-short-subtitle'>{packData.region}</div>

                        <p><span className='pack-short-subtitle'>Max Height :</span> {packData.altitude}</p>
                        <p><span className='pack-short-subtitle'>Grade :</span> {packData.grade}</p>
                        <p><span className='pack-short-subtitle'>Duration :</span> {packData.duration}</p>
                        <p><span className='pack-short-subtitle'>Trekking KM :</span> {packData.trekkingKm}</p>
                        <p><span className='pack-short-subtitle'>Price :</span>Rs.{packData.price}/-</p>
                        <p><span className='pack-short-subtitle'>Stating Date :</span> {packData.startingDate}</p>

                        <Link
                            to={{ pathname: `/booknow/${packData.packId}`, state: { package: packData } }}
                            className="btn-outline-white bg-success text-white border border-2 rounded p-1"
                        >
                            Book Now
                        </Link>

                        <Link
                            to={{ pathname: `/view/${packData.packId}`, state: { package: packData } }}
                            className="btn-outline-white bg-success text-white border border-2 rounded p-1"
                        >
                            Details
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    );

}

export default Package;