import React from 'react';
import Link from 'next/link';


class Header extends React.Component 
{
  
    render() 
    {
      return(
        <>
            <div className="col-12 topbg-black py-2 px-0  wow fadeInDown animated">
                <div className="container">
                    <div className="row">
                
                        <div className="col-12 nopad">
                            <ul className="d-none d-lg-block">
                            <li className="mail-ico"><a href="mailto:specialistmattress@live.com"> specialistmattress@live.com</a></li>
                           </ul>
                            <ul className="ph-ul  text-right f-right">
                            <li className="ph-ico"><a href="tel:0800 0 155 585"> Sales : 0800 0 155 585</a></li>
                            <li><a href="tel:0151 348 8990"> Support : 0151 348 8990</a></li>
                            <li class="social-ico"><a target="_blank" href="https://www.facebook.com/SpecialistMattress/" class="wow fadeIn animated"><i class="fab fa-facebook-f"></i></a></li>
                            <li><a target="_blank" href="https://www.linkedin.com/company/specialist-mattress-systems" class="wow fadeIn animated"><i class="fab fa-linkedin-in"></i></a></li>
                            </ul>
                        </div>
                    
                
                    </div>
                </div>
            </div>
            <header>
                <div className="logo margin_navbar-logo logo_display">
                   
                    <Link href="/" >
                    <img src="img/logo.png" className=" wow fadeIn  animated" alt="Logo Img" />
                    </Link>
                  
                </div>
                <a className="my-tog-btn" >
                    <span></span>
                    <span></span>
                    <span></span>
                </a>

                <nav id="my-nav1" className="navbar navbar-expand-sm navbar-light rounded-bar transparent-bar margin-nav">
                    <div className="container bg-trans-color nopad">
                        <div className="collapse navbar-collapse" id="navbarSupportedContent1" >
                            <div className="collapse navbar-collapse">
                            <ul className="navbar-nav">
                                <li className="nav-item wow flash animated">
                                <Link href="/">
                                    <img src="img/logo.png" className="logo-fix  wow fadeIn  animated" alt="" />
                                </Link>
                                </li>
                            </ul>
                            <ul className="navbar-nav ml-auto wow flash animated">
                                <li className="nav-item">
                                    <Link  href="/"><a className="nav-link wow fadeIn  animated">Home</a></Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        About Us
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <Link  href="/about"><a className="dropdown-item">Who We Are</a></Link>
                                        <Link  href="/testimonials"><a className="dropdown-item">Testimonials</a></Link>
                                        
                                    </div>
                                </li>
                                <li className="nav-item dropdown">
                                   <a className="nav-link dropdown-toggle" href="#"  id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    
                                    What we offer
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                       <Link  href="/services"><a className="dropdown-item">Services</a></Link>
                                        <Link  href="/pay-use"><a className="dropdown-item">Pay as You Use Mattress</a></Link>
                                        <Link  href="/repair-maintenance"><a className="dropdown-item">Repair & Maintenance</a></Link>
                                        <Link  href="/rental-equipment"><a className="dropdown-item">Rental Equipment & Solutions</a></Link>
                                        <Link  href="/emergency-pressure-care-system"><a className="dropdown-item">Emergency Pressure Care System</a></Link>
                                        <Link  href="/complimentary-training"><a className="dropdown-item">Complimentary Training</a></Link>
                                        <Link  href="/total-bed-management-programme"><a className="dropdown-item">Total Bed Management Programme</a></Link>
                                       
                                    </div>
                                    
                                </li>
                             
                                <li className="nav-item">
                                    <Link  href="/products"><a className="nav-link wow fadeIn  animated">Products</a></Link>
                                </li>
                               
                                <li className="nav-item">
                                    <Link href="/contact"><a className="nav-link wow fadeIn  animated" >Contact Us</a></Link>
                                </li>
                            </ul>
                            </div>
                            <span class="slogan">"Client’s needs are our No 1 Priority"</span>
                        </div>
                    </div>
                </nav>
                <div className="outer-window">
                    <div className="navbar_small">
                        <a className="close-outerwindow"><i className="las la-times"></i>
                        </a>
                        <div className="logo">
                        
                            
                            <Link href="/home" >
                                <a className="scroll"><img src="img/logo.png" alt="Logo Img" /></a>
                            </Link>    
                                
                        </div>
                        <nav className="navbar1">
                            <ul className="navbar-nav ml-auto mr-auto">
                            <li className="nav-item">
                                <Link  href="/home" ><a className="nav-link active wow fadeIn  animated">Home</a></Link>
                            </li>
                           
                            <li className="nav-item">
                                <Link  href="/about" ><a className="nav-link wow fadeIn  animated">Who We Are</a></Link>
                            </li>  
                            <li className="nav-item">
                                <Link href="/testimonials" ><a className="nav-link wow fadeIn  animated" >Testimonials</a></Link>
                            </li>  
                           
                            <li className="nav-item">
                                <Link  href="/services" ><a className="nav-link wow fadeIn  animated">Services</a></Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/pay-use" ><a className="nav-link wow fadeIn  animated" >Pay as you use mattress</a></Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/products" ><a className="nav-link wow fadeIn  animated" >Products</a></Link>
                            </li>
                            <li className="nav-item">
                                <Link  href="/repair-maintenance"><a className="nav-link wow fadeIn  animated">Repair & Maintenance</a></Link>
                            </li>
                            <li className="nav-item">
                                <Link  href="/contact" ><a className="nav-link wow fadeIn  animated">Contact Us</a></Link>
                            </li>
                            </ul>
                        </nav>
                    </div>
                   
                </div>
            </header>
        </>

      )
        
    }
}



export default Header;