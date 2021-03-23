import React from 'react';
import Link from 'next/link';
import EnquiryForm from './enquiry';
class Payuse extends React.Component 
{
    

    render() 
    {
       
      return(
        <div>
        <section className="payuse-banner">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                <h2>Repair & Maintenance</h2>
                <p>Guaranteed repairs to ALL Pressure Care Products</p>
                <div className="card repair-card">
                    <div className="row">
                        <div className="col-12 col-lg-6">
                    <img className="card-img-top img-fluid" src="img/repair-maintenance/repair.png" alt="" />
                </div>
                    <div className="col-12 col-lg-6">
                    <div className="card-body">
                        <p className="card-text">We offer a full repair and decontamination service for all types of alternating pressure mattress. Whether you are using a regular make or one of the more specialist systems such as TALLEY, PEGASUS or HUNTLEIGH, SMS will repair and maintain your mattresses. Using only the best materials to prevent early breakdown of cells call out rates and labour charges are kept to a minimum.</p>
                        <p>“In response to any emergency <strong> we are at your service 7 days a week, 24 hours a day, 365 days a year.</strong> We ensure your patient’s needs are met quickly and products are supplied accurately.”</p>
                        <p>We can collect, repair and deliver in just 3 days call us on <a href="tel:01513488990">0151 348 8990</a> or fill in the form to book your bed audit today to find out more!</p>
                    </div>
                </div>
                </div>
                </div>
                </div>


            </div>
            </div>
            </section>
            <section className="repair-img-sec">
   <div className="container">
      <div className="row">
         <div className="col-12">


       <div className="card repair-card  p-5 shadow-repair">
         <div className="row">
            <div className="col-12 col-lg-4">
         <img className="card-img-top img-fluid" src="img/update-pages/maintenance-img1.jpg" alt="" />
      </div>
   <div className="col-12 col-lg-8 d-flex align-items-center">
      <img className="card-img-top img-fluid" src="img/update-pages/maintenance-img2.jpg" alt="" />
   </div>
      </div>
       </div>


      </div>


   </div>
   </div>
</section>




             <EnquiryForm /> 
    </div>
      )
        
    }
}



export default Payuse;