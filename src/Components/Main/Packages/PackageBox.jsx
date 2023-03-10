import { useState } from "react";
import Package from "./Package";

const PackageBox = (props) => {


  const [packageDetails, setPackageDetails] = useState(props.trekAllData);

  const renderPackages = packageDetails.map(pack =>
  (
    <Package key={pack.packId} pack={pack} />
  ));

  return (
    <div className="container">
      <div className="row">

        {renderPackages}

      </div>
    </div>
  );
};

export default PackageBox;
