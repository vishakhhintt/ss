import React from 'react';
import Link from 'next/link';
import EnquiryForm from './enquiry';
export async function getServerSideProps(context) {
    
   
    const res = await fetch(`https://admin.specialistmattresssystems.com/api/Home/testimonial`)
    const data = await res.json()
  
    console.log(data);
      if(data.status==1)
      {
          return {
              props : {
              loaded:true,
              testimonial:data.result,
              
          }};
      }
      else
      {
          return {
              props : {
                  loaded:false,
                  testimonial:null,
          }};
      }
  }
class Testimonials extends React.Component 
{
    

    render() 
    {
       
      return(
        <div>
            <section className="testi-banner">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2>Testimonials</h2>
                        </div>
                    </div>
                </div>
            </section>
                    
                <section className="abt-cntnt">
                <div className="container">
                    <div className="row">
                    {this.props.loaded?
                    (this.props.testimonial).map(testimonial => (  
                        <div className="col-12 col-lg-6 d-flex mb-4 testi-sec">
                            <div className="card card-abt-cntnt">
                                <div className="card-body">
                                    <h1 className="my-3 px-3">{testimonial['t_title']}</h1>
                                    <div className="gray-sec">
                                        <p>{testimonial['t_message']}</p>
                                    
                                    </div>
                                    <p className="py-2 px-3 auther"> {testimonial['t_author']} </p>
                                </div>
                            </div>
                        </div>
                         )):""
                        }
                        
                        
                    </div>
                </div>
                </section>

                <EnquiryForm />
        </div>
      )
        
    }
}



export default Testimonials;