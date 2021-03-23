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
                <h2>Pay as You Use Mattress</h2>
                <p>A UNIQUE PRESSURE CARE SYSTEM</p>
                <div className="card payuse-card">
                    <div className="row">
                        <div className="col-12 col-lg-6">
                    <img className="card-img-top" src="img/pay-use/banner-card.png" alt="Card image cap" />
                </div>
                    <div className="col-12 col-lg-6">
                    <div className="card-body">
                    <h5 className="card-title">Enjoy security and peace 
                        of mind with our Metered 
                        System.</h5>
                    <p className="card-text">This system provides you with the 
                        freedom and flexibility to always have 
                        a pressure care system available for 
                        use on demand without carrying the 
                        cost of renting or purchasing, you 
                        only pay for when you use.</p>
                    <Link href="/contact" ><a className="btn btn-primary rounded-0 payuse-btn">Make an enquiry</a></Link>
                    </div>
                </div>
                </div>
                </div>
                </div>

            <div className="col-12 header-foot">
            <div className="row">
                <div className="col-12 col-lg-3 col-md-6">
                    <div className="card custom-ico">
                        <div className="ico-pay d-flex jsutify-content-center align-items-center">
                        <img className="card-img-top" src="img/pay-use/ico1.png" alt="Card image cap" />
                        </div>
                        <div className="card-body">
                        <p className="card-text">A digital clock records  the hours the product has been in use
                        </p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-3 col-md-6">
                    <div className="card custom-ico">
                        <div className="ico-pay d-flex jsutify-content-center align-items-center">
                        <img className="card-img-top" src="img/pay-use/ico2.png" alt="Card image cap" />
                        </div>
                        <div className="card-body">
                        <p className="card-text">Each month a metre reading is taken</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-3 col-md-6">
                    <div className="card custom-ico">
                        <div className="ico-pay d-flex jsutify-content-center align-items-center">
                        <img className="card-img-top" src="img/pay-use/ico3.png" alt="Card image cap" />
                        </div>
                        <div className="card-body">
                        <p className="card-text">You are invoiced on a monthly basis for  hours it has been used</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-3 col-md-6">
                    <div className="card custom-ico">
                        <div className="ico-pay d-flex jsutify-content-center align-items-center">
                        <img className="card-img-top" src="img/pay-use/ico4.png" alt="Card image cap" />
                        </div>
                        <div className="card-body">
                        <p className="card-text">Switch off <br /> the product and no costs are incurred </p>
                        </div>
                    </div>
                </div>
            </div>
            </div>  

            </div>
            </div>
            </section>

            <section className="enjoy-benefit">
            <div className="container">
                <div className="row">
                    <h2 className="mb-5">Enjoy the benefit of full control and flexibility</h2>
                    <div className="col-12 col-lg-6">
                        <figure>
                        <img src="img/pay-use/sec-img.png" alt="" />
                        </figure>
                    </div>
                    <div className="col-12 col-lg-6 b-points">
                        <ul>
                        <li>Always enjoy the security and peace of mind with our unique system</li>
                        <li>Always have a product for immediate use without cost</li>
                        <li>Never be put in a position where you have to compromise continuing patient care</li>
                        <li>Never leave yourself open to litigation</li>
                        <li>Never be committed to a cost that you can’t control</li>
                        <li>Always be in control of product and costs</li>
                        <li>NO Cleaning / Decontaminating Cost</li>
                        <li>NO Repairs</li>
                        </ul>
                    </div>
                </div>
            </div>
            </section>

            <section className="remember">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-2 d-flex align-items-center"> <div className="bulb-img d-flex jsutify-content-center align-items-center"><img src="img/pay-use/lightbulb.png" alt="" /></div></div>
                    <div className="col-12 col-md-10">
                    <h2>Remember</h2>
                    <p>We know that systems occasionally breakdown or fail. With SMS you simply commission the spare system and call us to collect
                        and replace your failed system.</p>
                        <p>SMS put you in control whilst keeping your finance department happy. We operate a 24 hours, 7 days a week, 365 days a year 
                        call out service delivering to care homes nationwide.  Our dedicated team listen to your individual requirements and 
                        customise a solution to fit your specific needs.</p>
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