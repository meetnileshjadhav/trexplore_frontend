import { useState } from "react";
import Searchbox from "../Searchbox/Searchbox";
import FilterPackage from "./FilterPackage";

const PackageBox = (props) => {

  const [filterCheck, setFilterCheck] = useState("");
  const [filterCriteria, setFilterCriteria] = useState("");

  const [packageDetails, setPackageDetails] = useState(props.trekAllData);
  // const [packageDetails, setPackageDetails] = useState(
  //   [{
  //     "Package_Id": 1,
  //     "Package_Name": "Kalsubai Hills",
  //     "Region": "Maharashtra",
  //     "Max_Height": "5400 ft",
  //     "Grade": "Medium",
  //     "Duration": "4 Days",
  //     "Season": "Rainy",
  //     "Trekking_KM": "7 KM",
  //     "Age_Limit": "12 Years",
  //     "Hotel Facility": "Available",
  //     "Stay": "Camping & Hotel/Guesthouse",
  //     "Nearby_Paces": "Bhandardara Lake",
  //     "Trail": "Through hills",
  //     "Train": "Khopoli Station",
  //     "Airport": "Pune airport"
  //   },

  //   {
  //     "Package_Id": 2,
  //     "Package_Name": "Harishchandragad Hills",
  //     "Region": "Maharashtra",
  //     "Max_Height": "4650 ft",
  //     "Grade": "Difficult",
  //     "Duration": "5 Days",
  //     "Season": "Summer",
  //     "Trekking_KM": "18 KM",
  //     "Age_Limit": "18 Years",
  //     "Hotel Facility": "Not available",
  //     "Stay": "Camping",
  //     "Nearby_Paces": "Malshej Ghat, Ratnagad Fort",
  //     "Trail": "Through hills and forest",
  //     "Train": "Igatpuri Station",
  //     "Airport": "Pune airport"
  //   },

  //   {
  //     "Package_Id": 3,
  //     "Package_Name": "Panchmarhi Hills",
  //     "Region": "Madhyapradesh",
  //     "Max_Height": "3500 ft",
  //     "Grade": "Easy",
  //     "Duration": "3 Days",
  //     "Season": "Rainy",
  //     "Trekking_KM": "14 KM",
  //     "Age_Limit": "12 Years",
  //     "Hotel Facility": "Available",
  //     "Stay": "Camping & Hotel/Guesthouse",
  //     "Nearby_Paces": "Bee Hill, Pandava Caves",
  //     "Trail": "Through hills",
  //     "Train": "Panchmarhi Station",
  //     "Airport": "Not available"
  //   },


  //   {
  //     "Package_Id": 4,
  //     "Package_Name": "Ginnogarh Fort",
  //     "Region": "Madhyapradesh",
  //     "Max_Height": "2300 ft",
  //     "Grade": "Easy",
  //     "Duration": "3 Days",
  //     "Season": "Winter",
  //     "Trekking_KM": "10 KM",
  //     "Age_Limit": "8 Years",
  //     "Hotel Facility": "Available",
  //     "Stay": "Camping & Hotel/Guesthouse",
  //     "Nearby_Paces": "Ratpani Wildlife Santury",
  //     "Trail": "Through hills and forest",
  //     "Train": "Bhopal Station",
  //     "Airport": "Raja Bhoj Airport"
  //   },

  //   {
  //     "Package_Id": 5,
  //     "Package_Name": "Goecha La",
  //     "Region": "7_Sisters_State",
  //     "Max_Height": "16207 ft",
  //     "Grade": "Difficult",
  //     "Duration": "15 Days",
  //     "Season": "Summer",
  //     "Trekking_KM": "90 KM",
  //     "Age_Limit": "18 Years",
  //     "Hotel Facility": "Not Available",
  //     "Stay": "Camping",
  //     "Nearby_Paces": "Samiti Lake",
  //     "Trail": "Through alpine forest",
  //     "Train": "Jalpaiguri Station",
  //     "Airport": "Bagdogra Airport"
  //   },

  //   {
  //     "Package_Id": 6,
  //     "Package_Name": "Hampta Pass",
  //     "Region": "Himalayan",
  //     "Max_Height": "14000 ft",
  //     "Grade": "Medium",
  //     "Duration": "8 Days",
  //     "Season": "Summer",
  //     "Trekking_KM": "25 KM",
  //     "Age_Limit": "16 Years",
  //     "Hotel Facility": "Available",
  //     "Stay": "Camping and Hotel",
  //     "Nearby_Paces": "Kullu and Manali",
  //     "Trail": "Through alpine forest",
  //     "Train": "Jogindar Nagar Station",
  //     "Airport": "Bhuntar,Manali Airport"
  //   }]
  // );
  // const [packageDetails, setPackageDetails] = useState([
  //   {
  //     "Package_Id": 1,
  //     "Package_Name": "Package 1",
  //     "Region": "Maharashtra",
  //     "Max_Height": "11000 ft",
  //     "Grade": "Difficult",
  //     "Duration": "12 Days",
  //     "Trekking_KM": "25 KM"
  //   },
  //   {
  //     "Package_Id": 2,
  //     "Package_Name": "Package 2",
  //     "Region": "Himachal Pradesh",
  //     "Max_Height": "14000 ft",
  //     "Grade": "Difficult",
  //     "Duration": "20 Days",
  //     "Trekking_KM": "35 KM"
  //   },
  //   {
  //     "Package_Id": 3,
  //     "Package_Name": "Package 3",
  //     "Region": "Madhyapradesh",
  //     "Max_Height": "7000 ft",
  //     "Grade": "Easy-Medium",
  //     "Duration": "4 Days",
  //     "Trekking_KM": "32 KM"
  //   },
  //   {
  //     "Package_Id": 4,
  //     "Package_Name": "Package 4",
  //     "Region": "Karnataka",
  //     "Max_Height": "8000 ft",
  //     "Grade": "Medium-Difficult",
  //     "Duration": "16 Days",
  //     "Trekking_KM": "30 KM"
  //   }
  // ]);

  const filterPackage = (fil, criteria) => {
    setFilterCheck(fil);
    setFilterCriteria(criteria);
  }

  const filPackages = packageDetails.filter(pack => pack[filterCriteria] === filterCheck);

  const renderPackages = filPackages.map(pack =>
  (
    // <div className="col-md-3">
    <FilterPackage pack={pack} />
    // </div>
  ));

  return (
    <div className="container">
      <div className="row">
        <Searchbox filterPackage={filterPackage} />
      </div>

      <div className="row">

        {renderPackages}

      </div>
    </div>
  );
};

export default PackageBox;
