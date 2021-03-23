import React, { useState }  from 'react';
import Link from 'next/link';
import axios from "axios"; 
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();

function ProductEnquiryForm() 
{
    
    const [contact, setContact] = useState({
        name: '',
        phone: '',
        email:'',
        company:''
          }); 
    const [response, setResponse] = useState({
            submitted: false,
          });
    const handleInputChange = e =>
       setContact({  ...contact,[e.target.name]: e.target.value });
    const handleFormSubmit = async event => {
        setResponse({submitted: true});
        
        var formData = new FormData();
        formData.append('name',contact.name);
        formData.append('email',contact.email);
        formData.append('phone', contact.phone);
        formData.append('company', contact.company);
        axios({
            method: 'post',
            url: "https://admin.specialistmattresssystems.com/api/home/enquirysub",
            data: formData,
            })
            .then ((response) => {
               console.log(response.data.rs);
              if(response.data.rs ==0)
              {
            //    console.log(response.data.errors.name);
                toast.error(response.data.errors.name) 
                toast.error(response.data.errors.email) 
                toast.error(response.data.errors.phone) 
                toast.error(response.data.errors.company) 
              
                setResponse({submitted: false});
                
              }
              else
              {
                
                toast.success(response.data.msg) 
                setContact({
                    name: '',
                    email: '',
                    phone:'',
                    company:''
                      });
                
               
                      setResponse({submitted: false});
              }
  
            })
            .catch(function (response) {
                //handle error
                console.log(response)
            });
      
              event.preventDefault();
      }
   
	
        return(
            <div className="row">
                            
            <div className="enquire-form col-12">
            <div className="row">
                <div className="col-12">
                    <h2>Make an enquiry</h2>
                </div>
                <form className="custom-form" onSubmit= {handleFormSubmit} >
                    <div className="col-12 mt-2">
                        <div className="row">
                        <div className="col-12 col-md-6">
                            <input id="name" name="name" onChange={handleInputChange} value={contact.name} type="text"  className="form-control  py-4 rounded-0" placeholder="Name" />
                            <input id="email" name="email" onChange={handleInputChange} value={contact.email} type="text" className="form-control  py-4 rounded-0" placeholder="Email" />
                        </div>
                        <div className="col-12 col-md-6">
                            <input id="phone" name="phone" onChange={handleInputChange} value={contact.phone} type="text" className="form-control py-4 rounded-0" placeholder="Phone" />
                            <input id="company" name="company" onChange={handleInputChange} value={contact.company} type="text" className="form-control py-4 rounded-0" placeholder="Company" />
                            <span id="spinner" style={{display: "none"}}><i className="fa fa-spin fa-spinner"></i></span>
                            {response.submitted ? <img height="100" width="100" src="https://admin.specialistmattresssystems.com/assets/admin/images/spinner.gif" alt="image" /> : <button className="btn btn-primary d-flex align-items-center rounded-0 px-3 send-btn">SEND</button>}
                        </div>
                        </div>
                    </div>
                </form>
            </div>
            </div>
                        </div>
      )
        
    
}



export default ProductEnquiryForm;