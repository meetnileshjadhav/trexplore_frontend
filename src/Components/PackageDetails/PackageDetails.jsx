import React, { useEffect, useState } from 'react';
import PackageDetailsHero from './PackageDetailsHero/PackageDetailsHero';
import PackDetailedInfo from './PackDetailedInfo/PackDetailedInfo';
import PackShortInfo from './PackShortInfo/PackShortInfo';
import { useLocation, useParams } from 'react-router-dom';
import TrekAPIService from '../TrekAPIService/TrekAPIService';



function PackageDetails() {
  const [packageData, setPackageData] = useState();

  let param = useParams().packId;
  let state = useLocation().state;

  console.log(state);
  console.log(param);

  // useEffect(() => {
  //   TrekAPIService.getAllPackages()
  //     .then((result) => {
  //       setPackageData(result.data)
  //       console.log(result.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

  // const detailedData = packageData.filter(data => data.packId === param);

  // console.log(detailedData);

  return (
    <div className='container-fluid p-0'>
      <PackageDetailsHero />
      <PackShortInfo detailedDetails={packageData} />
      <PackDetailedInfo detailedDetails={packageData} />
    </div>
  )
}

export default PackageDetails;
