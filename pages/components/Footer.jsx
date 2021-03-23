import React from 'react';


class Footer extends React.Component 
{
//   constructor(props) {
//         super(props);
//         this.state = {m_contact: [],loaded:false,social:[]};
//     }
//     componentDidMount() {
//         this.getContact();
  
//         }

//     getContact()
//     {
//         const proxyurl = "https://cors-anywhere.herokuapp.com/";
//         const url = "https://specialmatresses.hintt.com/admSpcl/api/Home/main_contact";
//         fetch(proxyurl + url) 
//                 .then(response => {
//                     return response.json();
//                 }).then(result => {
//             // console.log(result.result['social_media']);
//             if(result.status==1)
//             {
//                 this.setState({
//                 loaded:true,
//                 m_contact:result.result,
//                 social:result.result['social_media']
//                 });
//                 // console.log(this.state.social);
//             }
//             else
//             {
//                 this.setState({
//                 loaded:false,
//                 m_contact:null
//                 });
//             }
//                 });
//     }
    
//     topFunction = event => {
//         document.body.scrollTop = 0;
//         document.documentElement.scrollTop = 0;
//         }


    render() 
    {
      return(
    <div>
        <footer className="footer">
            <div className="container-fluid p-0">

            <div className="col-12 row px-0 mx-0">
                <div className="col-12 col-lg-1">
                </div>
                

                <div className="col-12 col-lg-4 col-md-4 col-sm-6 py-5 m-pad m-center">
                    <h3>Sales</h3>
                    <ul className="pl-3">
                        <li> <a href="tel:0800 015 5585" className="wow fadeIn animated"> Freephone: 0800 015 5585</a></li>
                        <li> <a href="tel:0151 348 8990" className="wow fadeIn animated"> Telephone: 0151 348 8990</a></li>
                        <li><a href="mailto:specialistmattress@live.com" className="wow fadeIn animated">Email: specialistmattress@live.com</a></li>
                    </ul>
                    <h3>Registered Address</h3>
                    <ul className="pl-3">
                        <li> <a href="JavaScript:void(0);" className="wow fadeIn animated">Unit 4, Evans Business Park, North Road, Ellesmere Port, Cheshire. CH65 1AE</a>
                        </li>
                    </ul>
                </div>
                <div className="col-12 col-lg-4 col-md-4 col-sm-6 py-5 m-pad m-center">
                   
                    <img src={`${process.env.SERVER}/img/brands.png`} alt="Brand Img" />
                </div>
                <div className="col-12 col-lg-3 col-md-4  d-none d-md-block bg-sub-footer">
                </div>
            </div>

            </div>
        </footer>
        <section className="footer-bottom">
            <div className="container-fluid p-0">
            <div className="row col-12">
                <div className="col-12 col-lg-1">
                </div>
                <div className="col-12 col-lg-10">
                    <div className="row">
                        <div className="col-12 col-md-9 m-center m-center">
                        <p className="text-white wow fadeIn animated">©Copyright Specialist Mattresses Systems Ltd 2020. All Rights Reserved. Registered in England and Wales. Company Number 03812909. </p>
                        </div>
                        <div className="col-12 col-md-3 text-right">
                        <p className="text-white wow fadeIn animated">Powered by <a target="_blank" href="https://hintt.com/">Hintt</a></p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-1">
                </div>
            </div>
            </div>
        </section>
        <button id="backToTop" className="backToTop" title="Go to top"><i className="fas fa-angle-up bk-top-ico"></i></button>
    </div>
      )
        
    }
}



export default Footer;