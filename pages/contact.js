import React, { useState }  from 'react';
import Link from 'next/link';
import axios from "axios"; 
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();

function Contact() 
{
    
    const [contact, setContact] = useState({
        first_name: '',
        last_name:'',
        email: '',
        phone:'',
        message:''
          }); 
    const [response, setResponse] = useState({
            submitted: false,
          });
    const handleInputChange = e =>
       setContact({  ...contact,[e.target.name]: e.target.value });
    const handleFormSubmit = async event => {
        setResponse({submitted: true});
        
        var formData = new FormData();
        formData.append('first_name',contact.first_name);
        formData.append('last_name', contact.last_name);
        formData.append('email',contact.email);
        formData.append('phone', contact.phone);
        formData.append('message', contact.message);
        axios({
            method: 'post',
            url: "https://admin.specialistmattresssystems.com/api/home/contactsub",
            data: formData,
            })
            .then ((response) => {
              if(response.data.rs==0)
              {
                toast.error(response.data.errors.first_name) 
                toast.error(response.data.errors.last_name) 
                toast.error(response.data.errors.email) 
                toast.error(response.data.errors.phone) 
                toast.error(response.data.errors.message) 
              
                setResponse({submitted: false});
                
              }
              else
              {
                
                toast.success(response.data.msg) 
                setContact({
                    first_name: '',
                    last_name:'',
                    email: '',
                    phone:'',
                    message:''
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
            <div>
            <section className="testi-banner">
               <div className="container">
                   <div className="row">
                       <div className="col-12">
                           <h2>Contact Us</h2>
                       </div>
                   </div>
               </div>
           </section>

           <section className="contact-banner">
               <div className="container">
                   <div className="row">
                       <div className="col-12 col-lg-6 col-md-12">
                           <figure>
                               <img src="img/contact/contact-mail.gif" alt="" />
                           </figure>
                       </div>
        
                       <div className="col-12 col-lg-6 col-md-12">
                       <form name="contact-form" id="contact-form" className="cotact-form" onSubmit={handleFormSubmit}>
                           <fieldset>
                               <h1 className="title text-center mb-4">Get in touch with us!</h1>
                       
                               <div className="row">
                               <div className="col-12 col-md-6">

                               <div className="form-group position-relative">
                                   <label for="formName" className="d-block">
                                       <i className="icon" data-feather="user"></i>
                                   </label>
                                   <input onChange={handleInputChange} type="text" id="first_name" name="first_name" value={contact.first_name}  className="form-control form-control-lg thick" placeholder="First Name" />
                               </div>
                               </div>
                       
                               <div className="col-12 col-md-6">
                               <div className="form-group position-relative">
                                   <label for="formEmail" className="d-block">
                                       <i className="icon" data-feather="mail"></i>
                                   </label>
                                   <input onChange={handleInputChange} type="text" id="last_name" name="last_name" value={contact.last_name}  className="form-control form-control-lg thick" placeholder="Last Name" />
                               </div>
                               </div>
                               
                               <div className="col-12 col-md-6">
                                   <div className="form-group position-relative">
                                       <label for="formName" className="d-block">
                                           <i className="icon" data-feather="user"></i>
                                       </label>
                                       <input  onChange={handleInputChange} type="text" id="email" name="email" value={contact.email}  className="form-control form-control-lg thick" placeholder="Email" />
                                   </div>
                                   </div>
                           
                                   <div className="col-12 col-md-6">
                                   <div className="form-group position-relative">
                                       <label for="formEmail" className="d-block">
                                           <i className="icon" data-feather="mail"></i>
                                       </label>
                                       <input onChange={handleInputChange} type="text" id="phone" name="phone" value={contact.phone} className="form-control form-control-lg thick" placeholder="Phone Number" />
                                   </div>
                                   </div>
                       
                               <div className="col-12">
                               <div className="form-group message">
                                   <textarea onChange={handleInputChange} id="message" name="message" value={contact.message}  className="form-control form-control-lg" rows="7" placeholder="Message"></textarea>
                               </div>
                               </div>
                               
                               <div className="col-12 mt-2">
                                   <div className="text-center">
                                       {response.submitted ? <img height="100" width="100" src="https://admin.specialistmattresssystems.com/assets/admin/images/spinner.gif" alt="image" /> : <button type="submit" className="btn btn-primary" tabIndex="-1">Send message</button> }
                                       
                                   </div>
                               </div>
                               </div>
                           </fieldset>
                       </form>
                       </div>

                       <div className="col-12 col-lg-12 col-md-12">
                       <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4769.408438779008!2d-2.919749272733769!3d53.29483326987299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487ade44becd148d%3A0xac495871b1dacbc!2spioneer%20bussiness%20park%2C%20North%20Rd%2C%20Ellesmere%20Port%20CH65%201AE%2C%20UK!5e0!3m2!1sen!2sin!4v1608725613228!5m2!1sen!2sin" width="600" height="450" frameborder="0" style={{"border":"0"}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                       </div>
                   </div>
               </div>
           </section>
       </div>
      )
        
    
}



export default Contact;