import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import 'react-toastify/dist/ReactToastify.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Aboutus from "./Components/Aboutus/Aboutus";
import FilterMain from "./Components/FilterTrek/FilterMain";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Home from "./Components/Home/Home";
import PackageDetails from "./Components/PackageDetails/PackageDetails";
import BookNow from "./Components/BookNow/BookNow";
import Logout from "./Components/Logout/Logout";
import PaymentDetails from "./Components/PaymentDetails/PaymentDetails";
import AdminControl from "./Components/AdminControl/AdminControl";
import ModifyPackage from "./Components/AdminControl/ModifyPackage";
import ModifyCustomer from "./Components/AdminControl/ModifyCustomer";
import ModifyHotelService from "./Components/AdminControl/ModifyHotelService";
import ModifyGearShop from "./Components/AdminControl/ModifyGearShop";
import ModifyTourGuide from "./Components/AdminControl/ModifyTourGuide";
import TrekAPIService from './Components/TrekAPIService/TrekAPIService';
import AllData from "./AllData/AllData";

function App() {

const [trekAllData, setTrekAllData] = useState(AllData);

useEffect(()=>{
  TrekAPIService.getAllPackages()
  .then((result) => {
      setTrekAllData(result.data);
      console.log(result.data);
  })
  .catch((error) => {
      console.log(error);
  });
},[]);

  return (
    <div className="App container-fluid">
      <Header />
      <Routes>
        <Route path="/" exact element={<Home trekAllData={trekAllData}/>} />
        <Route path="/filtertrek" element={<FilterMain trekAllData={trekAllData}/>} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admincontrol" element={<AdminControl />} />
        <Route path="/booknow/:packId" element={<BookNow />} />
        <Route path="/paymentdetails" element={<PaymentDetails />} />
        <Route path="/view/:packId" element={<PackageDetails />} />
        <Route path="/logout" element={<Logout />} />

        { /* Admin Page */}
        <Route exact path='/admincontrol/packages' element={<ModifyPackage />} />
        <Route exact path='/admincontrol/customers' element={<ModifyCustomer />} />
        <Route exact path='/admincontrol/gearshops' element={<ModifyGearShop />} />
        <Route exact path='/admincontrol/tourguides' element={<ModifyTourGuide />} />
        <Route exact path='/admincontrol/hotelservices' element={<ModifyHotelService />} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
