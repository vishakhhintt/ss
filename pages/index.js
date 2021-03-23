import React from 'react';
import Link from 'next/link';

import dynamic from 'next/dynamic';

const InfiniteCarousel = dynamic(import('react-leaf-carousel'), { ssr: false });
import HomeTestimonials from './components/HomeTestimonials';

const sldr = [{"slider_id":"7","align":"text-cente","title":"Specialist Mattress<br \/>\r\nSystems","image":"images\/slider\/banner1.jpg","description":"<p>The UK’s leading provider of pressure relief solutions <br \/>\r\nto the care sector since 1996.<\/p>\r\n","class_active":"active"},
              {"slider_id":"8","align":"text-left","title":"","image":"images\/slider\/banner2.jpg","description":"","class_active":""},{"slider_id":"8","align":"text-left","title":"","image":"images\/slider\/banner3.jpg","description":"","class_active":""}]

//   const baseurl = 'http://localhost:3000/admSpcl/';
//    const imgname = <img src='img/loader.gif' alt="First slide" />;
//   const Loader = () => <div style={{ "text-align":"center" }}>{imgname}</div>;

export async function getServerSideProps(context) {
    
   
  const res = await fetch(`https://admin.specialistmattresssystems.com/api/Home/review`);
  const data = await res.json();

  return {
      props : {
      status : data.status,
      result : data.result,
  }};
}
class Home extends React.Component 
{
    

    render() 
    {
        console.log( process.env.SERVER);
        const baseurl = 'https://admin.specialistmattresssystems.com/';   
      return(
        <div>
            
            <div id="carouselExampleControls" className="carousel slide banner-slid" data-ride="carousel">
                <div className="carousel-inner">
                { 
                    sldr.map(function(slider, idx){

                    return (<div className={"carousel-item "+slider['class_active']} >
                        <img className="d-block w-100" src={baseurl + slider['image']} alt="First slide" />
                        <div className={"carousel-caption "+slider['align']}>
                            <h5 className="mb-3 wow flash animated">
                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html: slider['title']
                                        }}>

                                    </div>
                               
                            </h5>
                            <p className="d-none d-lg-block wow flash animated">
                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html: slider['description']
                                        }}>

                                    </div>
                                
                            </p>
                        </div>
                    </div> )

                                      })
                    }   



                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
                </a>
            </div>
            <section class="we-card">
              <div class="container">
                <div class="row">
                  <div class="col-12 col-md-6 wow fadeInUp animated">
                    <div class="card ">
                      <div class="card-body p-0">
                        <img class="card-img-top" src="img/home/card-2.png" alt="Card image cap" />
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-md-6 d-flex wow fadeInUp animated">
                    <div class="card cust-card2">
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12 py-5 w-100 back-bg"></div>
            </section>
            <section className="mattress">
                <div className="container">
                    <div className="row">
                    <div className="col-12 col-md-4 text-center">
                     
                        <h2 className="text-center  wow fadeInLeft animated">What We Can <br /> 
                        Do for You
                        </h2>
                        <p className="text-center wow fadeInLeft animated">Your patient’s needs <br /> 
                        are our number one priority.
                        </p>
                        <Link href="/services"><a><button className="btn btn-transparent text-center wow fadeInLeft animated">Learn More <i className="fas fa-arrow-right"></i></button></a>
                        </Link>
                    </div>
                    <div className="col-12 col-md-8">
                        <img src="img/home/mattress.png" className="img-fluid matt-img wow fadeInRight animated" alt="" />
                    </div>
                    </div>
                </div>
            </section>
            <section className="pressure">
                <div className="container">
                    <div className="row">
                    <div className="col-12 bg-img-ress m-pad">
                        <div className="col-12 col-md-7 ml-auto custom-marg-press">
                            <div className="col-12 bg-pressure-relief">
                                <div className="jumbotron gauge-jumbotron">
                                <h3>Pressure Relief Systems</h3>
                                
                                <p className="lead">Our beds are designed with a certain amount of future-proofing and are fully  compliant with proposed European Safety Standards.
                                </p>
                                </div>
                            </div>
                            <div className="col-12 bg-pressure-pay">
                                <div className="jumbotron pressure-jumbotron">
                                <h3>Pay as You Use Mattress</h3>
                                
                                <p className="lead">Always have a pressure care system available for use on-demand without  carrying the cost of renting or purchasing, you only pay when you use it.
                                </p>
                                </div>
                            </div>
                            <div className="col-12 bg-pressure-relief">
                                <div className="jumbotron wrenchs-jumbotron">
                                <h3>Repair and Maintenance</h3>
                                <p className="lead">We offer a full repair and decontamination service for all types of  alternating pressure mattresses.
                                </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
            <section className="testi">
                <div className="container">
                    <div className="col-12 text-center wow fadeInUp  animated">
                    <h2 className="py-3">What our customer’s say</h2>
                    </div>
                    <div className="row">
                    <div className="col-md-12">
                    <HomeTestimonials status={this.props.status}  testimonial={this.props.result} /> 
                    </div>
                    </div>
                </div>
            </section>
             

        </div>
      )
        
    }
}



export default Home;