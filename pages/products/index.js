import React, { useState  }  from 'react';
import axios from "axios"; 
import Link from 'next/link';

let s = [];
export default function Posts({ products, category}) {
    
    const [productSatets, setAllValues] = useState({
        p_loaded: true,
        p_haveData: products.status==1?true:false,
        p_isMore: true,
        p_isMoreProgress: false,
        p_page: 1,
        
     });
     const [categorySatets, setAllCatValues] = useState({
        c_haveCat:category.status==1?true:false,
        c_category : category.result,
        c_catChoosedstat : null,
        c_catChoosed : null
        
     });
    const [p_showdata, setDivdata] = useState(appendProducts(products.result,null)); 
     
    //   const [p_loaded, setIsLoaded] = useState(true);
    //   const [p_haveData, setPdata] = useState(products.status==1?true:false);
    //   const [p_isMore, setIsMore] = useState(true);
    //   const [p_isMoreProgress, setIsMoreProgress] = useState(false);
    //   const [p_page, setPage] = useState(1);
    //   const [p_showdata, setDivdata] = useState(appendData(products.result,null));
   
    async function loadMoreData(event)
    {
        event.preventDefault();
        let cstate = categorySatets.c_catChoosed;
        setAllValues({...productSatets,p_isMoreProgress:true});
        let p = productSatets.p_page+1;
        let moreData = await fetchMoreData(p,cstate);
        setDivdata(appendProducts(moreData.result,p_showdata));
        if(moreData.status==1)
        {
            setAllValues({...productSatets,p_isMoreProgress:false,p_page:p,p_haveData:true,p_isMore:true});
        }
        else
        {
            setAllValues({...productSatets,p_isMoreProgress:false,p_page:p,p_haveData:false,p_isMore:false});
        }
    }
    
    async function handleCatClick(i,c_id)
    {
        event.preventDefault();
        let cstate = categorySatets.c_catChoosed;
        let cstatestat =  categorySatets.c_catChoosedstat;
        let p = 1;
        s = [];
       
        if(cstatestat == null)
        {
            cstatestat = [];
            cstatestat[i] =   true;
        }
        else
            cstatestat[i] = !cstatestat[i] ;
        if(cstate==null)
            cstate = [];
        cstate[i] = cstatestat[i] ? c_id : null;
       
        
        setAllValues({...productSatets,p_loaded:false,p_isMoreProgress:true,p_page:p});
        let moreData = await fetchMoreData(p,cstate);
        setAllCatValues({...categorySatets,c_catChoosed:cstate,c_catChoosedstat:cstatestat});
        
        setDivdata(appendProducts(moreData.result,s));
        if(moreData.status==1)
        {
            setAllValues({...productSatets,p_isMoreProgress:false,p_page:p,p_haveData:true,p_isMore:true});
        }
        else
        {
            setAllValues({...productSatets,p_isMoreProgress:false,p_page:p,p_haveData:false,p_isMore:false});
        }
    }
    async function fetchMoreData(page,cstate)
    {
        let catSelected = cstate==null?null:cstate.join(',');
        let apiUrl;
        apiUrl = 'https://admin.specialistmattresssystems.com/api/Product/product';
        let productsArray = await fetch(apiUrl, {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({"cates":catSelected,"page":page}), 
        });
      return productsArray.json();
        
        
       
        
         // parses JSON response into native JavaScript objects
    }
    return (
        <>
      
            <section className="payuse-banner">
                <div className="container">
                    <div className="row">
                        <div className="col-12 mb-5">
                            <h2>Products</h2>
                            <p>A UNIQUE PRESSURE CARE SYSTEM</p>      
                        </div>

                <div className="col-12 products-sec">
                <div className="row">
                    <div className="card col-12">
                        <div className="card-body">
                            <h6>Filter by</h6>
                            
            <div className="input-group filter">
            {categorySatets.c_haveCat?
                (categorySatets.c_category).map((category, index) => (   
                <span className="button-checkbox input-group-btn" id={"btnspan"+index}>
                    <button id={"btn"+index} type="button" className={categorySatets.c_catChoosedstat!=null && categorySatets.c_catChoosedstat[index]?'btn btn-primary active':'btn btn-default'} data-color="primary" onClick={() => handleCatClick(index,category['catgory_id'])} ><i class="state-icon"></i>{category['category']}</button>
                   {categorySatets.c_catChoosed!=null && categorySatets.c_catChoosed[index]?
                   <input type="checkbox"  checked className="hidden" id={"cbox"+index} />
                   :
                   <input type="checkbox"  className="hidden" id={"cbox"+index} />

                   } 
                </span>
                )):<img  src="img/spinner.gif" className="wait" alt="wait" width="100" align="center" />
            }
                
            </div>
            <div className="row">
                {
                    productSatets.p_loaded ?  p_showdata : <img  src="/img/spinner.gif" className="wait" alt="wait" width="100" align="center" />
                }
            </div>
               
                 {
                    productSatets.p_loaded?
                    productSatets.p_isMoreProgress ?
                    <div className="row">
                        <div className="col-12 text-center">
                        <img  src="img/spinner.gif" className="wait" alt="wait" width="100" align="center" />
                        </div>
                    </div>
                    :
                   (productSatets.p_isMore?
                <div className="row">
                    <div className="col-12 text-center">
                        <button className="btn load-btn"  onClick={loadMoreData} type="button" >Load More</button>
                    </div>
                </div>
                :'')
                :''
                } 

                        </div>
                    </div>
                </div>
                </div>  

                </div>
                </div>
                </section>
        </>
    );

}
export async function getServerSideProps(context) {
    // Fetch data from external API
    const products  = await getProducts(null,1);
    const category  = await getCategories();
    
    return { props: { products ,category } };
  };
 
  async function getProducts (catChoosed = null,page)
{
  
  let apiUrl;
  apiUrl = 'https://admin.specialistmattresssystems.com/api/Product/product';
  
  let productsArray = await fetch(apiUrl, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: {"cates":catChoosed,"page":page}, // body data type must match "Content-Type" header
  });
  return productsArray.json(); // parses JSON response into native JavaScript objects

}
async function getCategories ()
{
  
  let apiUrl;
  apiUrl = 'https://admin.specialistmattresssystems.com/api/Product/category';
  
  let categoryArray = await fetch(apiUrl, {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer' // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
   
  });
  return categoryArray.json(); // parses JSON response into native JavaScript objects

}

export const appendProducts = (products,divData) => {
    
    if(divData==null)
    divData=[];
    if(products)
    {
       const map1 = products.map(function (p,index) 
        {
            return (
            <div className="col-12 col-lg-4 col-md-6 d-flex">
                <Link href={`/products/${p.slug}`}  style={{"color":"black"}}>
                    <div className="card">
                        <div className="img-sec">
                            <img className="card-img-top" src={p.img} alt={p.title} />
                        </div>
                        <div className="card-body">
                            <h5 className="card-title product-title">{p.title}</h5>
                            <small style={{color:'#642568'}}>{p.catname}</small>
                            <p className="card-text">
                                <div dangerouslySetInnerHTML={{ __html: p.small_description}} />
                            </p>
                        </div>
                    </div>
                </Link>
            </div>
             );
        })
        divData.push(map1);
    }
    else
    {
        
        const map1 =  (
            <div className="col-12" id="noMore">
            
            <div className="">
        
                <div className="alert alert-danger" role="alert">
                    <h4 className="alert-heading">Sorry!</h4>
                    <p>No products were found.</p>
                    
                </div>
            
            </div>
            
        </div>
        );;
        divData.push(map1);
    }
    return (divData); 
 };