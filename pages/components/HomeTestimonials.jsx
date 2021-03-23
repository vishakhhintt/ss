import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';



function HomeTestimonials(props) {
    return(
        <div>
        { props.status ? 
                  <Carousel
                  showArrows={false}
                  infiniteLoop={true}
                  showThumbs={false}
                  showStatus={false}
                  autoPlay={true}
                  interval={6100}
                >
           {
                    (props.testimonial).map(t => (  
                        <div>
                        
                        <div className="myCarousel">
                          <h3>{t['t_author']}</h3>
                         
                          <p className="wow fadeIn  description animated">
                          {t['t_message']}
                          </p>
                        </div>
                      </div>
                       
                         ))
                        }
                        
           
       

      

       
      </Carousel>
      :''}
      </div>
               
        );
           
  }


export default HomeTestimonials;