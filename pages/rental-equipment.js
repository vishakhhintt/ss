import React from 'react';
import Link from 'next/link';
import EnquiryForm from './enquiry';
class Rental extends React.Component 
{
    

    render() 
    {
       
      return(
        <div>
        
        <section class="rental-equipment-banner">
         <div class="container">
            <h2 class="my-4">Rental Equipment <br />
               & Solutions</h2>
         </div>
      </section>
      
<section class="rental-equipment">
   <div class="container">
      <div class="row">
         <div class="col-12 col-lg-6 d-flex mb-4">
             <div class="card card-abt-cntnt">
               <div class="card-body">
                  <h5 class="">How would you like to rent - by the hour,
                     day, week, month or longer contract?
                     We cater for all needs.</h5>
                     <ul>
                        <li>Profiling Beds - Standard, Bariatric</li>
                        <li>Overlay Pressure Mattress</li>
                        <li>Deep Cell Pressure Mattress</li>
                        <li>Bariatric Pressure Mattress</li>
                        <li>Seat Cushions</li>
                     </ul>
               </div>
             </div>
         </div>
         <div class="col-12 col-lg-6 d-flex mb-4">
            <div class="card card-abt-cntnt">
               <div class="card-body">
                 <h5 class="">Just think of the Benefits to you!</h5>
                 <ul>
                    <li>No cost to repair or maintain</li>
                    <li>No cost for decontamination</li>
                    <li>No storage issue</li>
                    <li>No concerns - your account manager will work
                     with you to arrange for delivery and collection
                     to meet with your deadlines
                     </li>
                 </ul>
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



export default Rental;