import React from 'react';
import Link from 'next/link';
import EnquiryForm from './enquiry';
class About extends React.Component 
{
    

    render() 
    {
       
      return(
        <div>
        <section className="testi-banner">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2>About Us</h2>
                    </div>
                </div>
            </div>
        </section>
                
        <section className="about-banner">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                <h6>Specialist Mattress Systems Ltd has been <br /> providing pressure care solutions since 1996.</h6>
                 
                <p>A family-run company based in Ellesmere Port is now one of the leading <br /> 
                providers of pressure care equipment throughout the UK.
                    </p>
                <p>We supply a vast range of pressure care and cleaning products to <br /> fulfil all clients and individual needs.
                </p>
                 
                <p>Read our services for more information on rentals, repairs and your <br /> <b>FREE</b> pay as use mattresses.
                </p>
                
                <p>View the latest products, offers and specifications for the very latest <br />
                    in pressure care solutions. If you require a particular specification of  <br />
                    pressure care product, or you have a particular problem then contact us.
                </p>
                    <br/><br/>
                </div>
            </div>
            </div>
            </section>

           <EnquiryForm /> 
    </div>
      )
        
    }
}



export default About;