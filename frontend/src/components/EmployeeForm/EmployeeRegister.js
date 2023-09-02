import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate


function Register() {
  
  const navigate = useNavigate();

    const [Employee, setEmployee] = useState({
      FirstName:'',
        LastName:'',
        Email:'',
        GovtProof:'',
        Contact:'',
        Address: '',
        ZIPCode: '',
        // Add more fields as needed
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setEmployee((prevEmployee) => ({
          ...prevEmployee,
          [name]: value,
        }));
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const response = await axios.post('https://localhost:7148/api/Employee', Employee); // Adjust the API endpoint as needed
          if (response.status === 200) {
            console.log('Employee created successfully');
            navigate("/dashboard"); // Redirect upon successful register
            // Reset the form
            setEmployee({
              FirstName:'',
              LastName:'',
              Email:'',
              GovtProof:'',
              Contact:'',
              Address: '',
              ZIPCode: '',
            });
          }
        } catch (error) {
          console.error('Error creating user', error);
        }
      };
    

    return(
        <div>

            <section className="vh-200" style={{"background-color": "#eee"}}>
              <div className="container h-100 width=100px">
                <div className="row d-flex justify-content-center align-items-center h-100 width=200px">
                  <div className="col-lg-12 col-xl-11">
                    <div className="card text-black" style={{"border-radius": "25px"}}>
                      <div className="card-body p-md-5">
                        <div className="row justify-content-center">
                          <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                
                            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Employee Register</p>
                
                            <form onSubmit={handleSubmit} className="mx-1 mx-md-4">
                
                              <div className="d-flex flex-row align-items-center mb-4">
                                <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                <div className="form-outline flex-fill mb-0">
                                  <input type="text" className="form-control" id="FirstName" name="FirstName" value={Employee.FirstName} onChange={handleChange} placeholder="First Name"/>
                                </div>
                              </div>

                              
                              <div className="d-flex flex-row align-items-center mb-4">
                                <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                <div className="form-outline flex-fill mb-0">
                                  <input type="text" className="form-control" id="LastName" name="LastName" value={Employee.LastName} onChange={handleChange} placeholder="Last Name"/>  
                                </div>
                              </div>
                
                              <div className="d-flex flex-row align-items-center mb-4">
                                <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                <div className="form-outline flex-fill mb-0">
                                  <input type="email" className="form-control" id="Email" name="Email" value={Employee.Email} onChange={handleChange} placeholder="Email ID"/>
                                </div>
                              </div>

                              <div className="d-flex flex-row align-items-center mb-4">
                                <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                <div className="form-outline flex-fill mb-0">
                                <input type="text" className="form-control" id="GovtProof" name="GovtProof" value={Employee.GovtProof} onChange={handleChange} placeholder="Aadhar Number" />  
                                </div>
                              </div>

                              <div className="d-flex flex-row align-items-center mb-4">
                                <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                <div className="form-outline flex-fill mb-0">
                                <input type="text" className="form-control" id="Contact" name="Contact" value={Employee.Contact} onChange={handleChange} placeholder="Contact" />  
                                </div>
                              </div>


                              <div className="d-flex flex-row align-items-center mb-4">
                                <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                <div className="form-outline flex-fill mb-0">
                                <input type="text" className="form-control" id="Address" name="Address" value={Employee.Address} onChange={handleChange} placeholder="Address" />  
                                </div>
                              </div>


                              <div className="d-flex flex-row align-items-center mb-4">
                                <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                <div className="form-outline flex-fill mb-0">
                                  <input type="text" className="form-control"  id="ZIPCode" name="ZIPCode" value={Employee.ZIPCode} onChange={handleChange} placeholder="ZIPCode" />
                                </div>
                              </div>


{/* ---------- */}


{/* ------------ */}
                
                
                              {/* <div className="form-check d-flex justify-content-center mb-5">
                                <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                                <label className="form-check-label" for="form2Example3">
                                  I agree all statements in <a href="#!">Terms of service</a>
                                </label>
                              </div> */}
                
                              <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                <button type="submit" className="btn btn-primary btn-lg">Register</button>
                              </div>


                
                            </form>
                
                          </div>
                          <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                              className="img-fluid" alt="Sample image"/>
            
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

        </div>
    );
}

export default Register;