import React from 'react';
import Logo from '../../Logo/Logo3.jpg';
import './Aboutus.css';

const Aboutus = () => {
  return (
    <div className='container my-4 p-4 mx-auto'>
         <div className='row'>
          <div className="card col-md-4 border p-3">
            <h3 className='m-3 text-danger'>About Us</h3>
                <img src={Logo} class="card-img-top"/>
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item"><span className='card-detail'>Address:</span>  Official complex, CDAC, Pune</li>
                    <li className="list-group-item"><span className='card-detail'>Contact :</span>  022-900100100</li>
                    <li className="list-group-item"><span className='card-detail'>Email :</span>  trexplore.official@gmail.com</li>
                    <li className="list-group-item"><span className='card-detail'>Time :</span>  10:00 hrs to 17:00 hrs Monday - Saturday</li>
                  </ul>
                </div>
                
          </div>

          <div className="col-md-8 border  p-4">
              <h3 className='m-3 text-danger'>Write to Us</h3>
                  <form action="/">
                      <div className="mb-2 mt-5">
                        <label for="text" className="form-label font-weight-bold text-left">First Name</label>
                        <input type="fname" className="form-control" id="fname" placeholder="Enter First Name" name="fname" />
                      </div>

                      <div className="mb-2 mt-2">
                        <label for="text" className="form-label font-weight-bold text-left">Last Name</label>
                        <input type="text" className="form-control" id="lname" placeholder="Enter Last Name" name="lname" />
                      </div>

                      <div className="mb-2 mt-2">
                        <label for="text" className="form-label font-weight-bold text-left">Email</label>
                        <input type="email" className="form-control" id="email" placeholder="Enter Email" name="email" />
                      </div>

                      <div className="mb-2 mt-2">
                        <label for="text" className="form-label font-weight-bold text-left">Contact</label>
                        <input type="text" className="form-control" id="contact" placeholder="Enter Contact No" name="contact" />
                      </div>

  
                      <div className="mb-2 mt-2">
                        <label for="text" className="form-label font-weight-bold text-left">City</label>
                        <input type="text" className="form-control" id="city" placeholder="Enter City" name="city" />
                      </div>

                      <div className="mb-2 mt-2">
                        <label for="text" className="form-label font-weight-bold text-left">Subject</label>
                        <textarea className='form-control' id='subject' placeholder="Your message/query" name="subject" />
                      </div>

                    
                      <button type="submit" className="btn btn-primary bg-danger p-2 px-5">Post a Message</button>
                  </form>
              </div>
          </div>
    </div>
  )
}

export default Aboutus;
