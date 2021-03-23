import React from 'react';
import Link from 'next/link';

export async function getServerSideProps(context) {
    
   
  const res = await fetch(`https://admin.specialistmattresssystems.com/api/Home/service`)
  const data = await res.json()

  console.log(data);
    if(data.status==1)
    {
        return {
            props : { 
            loaded:true,
            service:data.result,
            service_phone:data.result[0]['mc_support_mobile']
        }};
    }
    else
    {
        return {
            props : {
                loaded:false,
                service:null,
        }};
    }
}
class Services extends React.Component 
{
    

    render() 
    {
        return(
        <div>
        <section className="services-banner">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                <h2>Services</h2>
                <p>Specialist Mattress Systems offer you a various range of services to <br />
                    enable your patient’s with the best care.
                    </p>
                    <h6>Your patient’s needs are our <br /><span>No 1 Priority.</span></h6>
                    <div className="banner-txt">
                        <p className="call-ico">To discuss any of the services below <br />
                        please contact <span><a href={"tel: "+this.props.service_phone}>{this.props.service_phone}</a></span></p>
                    </div>
                </div>
            </div>
            </div>
            </section>
                
            <section className="abt-cntnt">
            <div className="container">
                <div className="row">
                {this.props.loaded?
                (this.props.service).map(service => ( 
                    <div className="col-12 col-lg-6 d-flex mb-4">
                        <div className="card card-abt-cntnt">
                            <div className="card-body">
                                <h1 className="">{service['s_title']}</h1>
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: service['s_desc']
                                    }}>

                                </div>
                            </div>
                            <div className="gray-sec">
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: service['s_quote']
                                    }}>

                                </div>
                                
                            </div>
                        </div>
                    </div>
                    )):""
                }
                    
                   
                    
                </div>
            </div>
            </section>

            {/* <Enquiryform /> */}
    </div>
      )
        
    }
}



export default Services;