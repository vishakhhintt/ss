
import Layout from "./components/Layout";
import Head from 'next/head'
import { useRouter } from 'next/router';
import absoluteUrl from 'next-absolute-url';
function MyApp({ Component, pageProps,seoData }) {
  
  const router = useRouter();
  

  return <Layout>
    <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        
       
        {
          seoData.res==1 ?
          <>
           <meta name="description" content={seoData.seo_data.s_desc} />   
          
          <meta property="og:url"                content={seoData.seo_data.seo_url} />
          <meta property="og:title"              content={seoData.seo_data.seo_title} />
          <meta property="og:description"        content={seoData.seo_data.s_desc} />
          <meta property="og:image"              content={seoData.seo_data.seo_image} />

          <title>{seoData.seo_data.s_title}</title>
          </>
          :''
        } 
       
      </Head>
    <Component {...pageProps} />
         
  </Layout>

}

MyApp.getInitialProps = async ({ Component, ctx , router  }) => {
 
   const seoData = await getSEO(router);
    return {  seoData };
};
async function getSEO (router)
{
  
    let apiUrl,slug;
    apiUrl = 'https://admin.specialistmattresssystems.com/api/product/getmetadata';
  
    slug = router.pathname; 
    const data = { slug : slug };
    let seoArray = await fetch(apiUrl, {
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
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return seoArray.json();
 

}
export default MyApp

