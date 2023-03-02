import './Package.css';

const Package = ()=>{

    return (
        <div className="package">
            <div className="package-bg">
                <h3>Trek Name 1</h3>
                <h5>Region Name</h5>
            </div>
            <div className="package-info">
                <div className="pack-info-top">
                    <h5>Duration</h5>
                    <h4>10 Days</h4>
                </div>

                <div className="pack-info-bottom">
                    <h5>Altitude</h5>
                    <h4>8000ft</h4>
                </div>  
            </div>
        </div>
        );

}

export default Package;