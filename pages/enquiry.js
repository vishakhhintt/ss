import React, { useState }  from 'react';
import Link from 'next/link';
import axios from "axios"; 
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();

function EnquiryForm() 
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
            <section className="abt-form">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                    
                        <h2>Complementary Bed Audit</h2>
                        <p>We offer a full repair and decontamination service for all <br />
                        types of pressure mattresses.</p>
                    </div>
                    <form name="enquiry-form" id="enquiry-form" className="enquiry-form"  onSubmit= {handleFormSubmit}>
                        <div className="col-12 disp-blk mt-5">
                        <div className="col-12">
                        <div className="row">
                        <input id="name" onChange={handleInputChange} value={contact.name} name="name" type="text"  className="form-control form-control-control col-12 col-lg-3 py-4 d-flex cust-right rounded-0" placeholder="Name" />
                        <input id="email" onChange={handleInputChange} value={contact.email} name="email" type="text"  className="form-control form-control-control col-12 col-lg-3 py-4 d-flex cust-marg rounded-0" placeholder="Email" />
                        <input id="phone" onChange={handleInputChange} value={contact.phone} name="phone" type="text"  className="form-control form-control-control col-12 col-lg-2 py-4 d-flex cust-marg rounded-0" placeholder="Phone" />
                        <input id="company" onChange={handleInputChange} value={contact.company} name="company" type="text"  className="form-control form-control-control  col-12 col-lg-2 py-4 d-flex cust-marg rounded-0" placeholder="Company" />
                        <span id="spinner" style={{display: "none"}}><i className="fa fa-spin fa-spinner"></i></span>
                        
                        {response.submitted ? <img height="100" width="100" src="https://admin.specialistmattresssystems.com/assets/admin/images/spinner.gif" alt="image" /> : <button type="submit" className="btn btn-primary d-flex align-items-center cust-left rounded-0 px-3"><i className="far fa-paper-plane"></i></button> }
                        
                        </div>
                        </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
      )
        
    
}



export default EnquiryForm;