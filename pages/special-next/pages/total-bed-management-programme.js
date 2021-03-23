import React from 'react';
import Link from 'next/link';

class Rental extends React.Component 
{
    

    render() 
    {
       
      return(
        <div>
        
        <section class="bed-manage-pgm">
         <div class="container">
            <h2 class="my-4">Total Bed Management <br  />
               Programme</h2>
         </div>
      </section>
<section class="bed-management">
   <div class="container">
      <div class="row">
         <div class="col-12">
         <p></p>
      <div class="card repair-card border-0">
         <div class="row">
         <div class="col-12 col-lg-6 p-0">
         <div class="card-body mt-0 mt-lg-5">
            <p class="card-text">This allows the care facility to have as much
               equipment as they require for all the individual
               patient cases, irrespective of equipment or amount
               it is delivered, utilised, maintained all for one cost.</p>
               <p>This is based on the Old Hospital Ward System
                  where Managers, Matrons did not have to wait for
                  equipment to maintain the high levels of care that
                  used to be the most prevalent in Nursing Care.</p>
         </div>
      </div>
      <div class="col-12 col-lg-6">
         <img class="card-img-top img-fluid" src="img/update-pages/bed-management-img.jpg" alt="" />
      </div>
      
      <div class="col-12 mt-4">
         <p><b>This programme is a huge success:</b></p>
      </div>
      <div class="col-12 col-lg-6">
         <div class="card bed-management-points">
            <div class="card-body">
               <ul>
                  <li>Nursing Home Managers have peace
                     of mind that all eventualities with the
                     Pressure Care Equipment is managed
                     by Specialist Mattress Systems.</li>
               </ul>
            </div>
          </div>
      </div>
      <div class="col-12 col-lg-6">
         <div class="card bed-management-points">
            <div class="card-body">
               <ul>
                  <li>It is a particular favourite of the Finance
                     department as we offer a fixed rate on
                     one invoice which enables them to budget
                     costs without any unwanted surprises!</li>
               </ul>
            </div>
          </div>
      </div>

      </div>
       </div>
      </div>
   </div>
   </div>
</section>







{/* <Enquiryform /> */}
    </div>
      )
        
    }
}



export default Rental;