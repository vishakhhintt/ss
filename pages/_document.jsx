import Document, {Html, Head, Main, NextScript} from 'next/document';
class MyDocument extends Document {
    static async getInitialProps(ctx) {
      const initialProps = await Document.getInitialProps(ctx)
      return { ...initialProps }
    }
  
    render() {
      const baseurl = process.env.SERVER;
      return (
        <Html>
          <Head>
          <link rel="icon" href={baseurl+"/img/favicon.ico"}/>
     
      <link rel="stylesheet" href={baseurl+"/css/bundle.min.css"}/>
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap" rel="stylesheet"/>
     
      <link rel="stylesheet" href={baseurl+"/css/line-awesome.min.css"}/>
      
      <link rel="stylesheet" href={baseurl+"/css/style.css"}/>
     
 
      <link rel="stylesheet" href={baseurl+"/css/owl.theme.min.css"}/>
      <link rel="stylesheet" href={baseurl+"/css/custom.css"}/>     
           
           
          </Head>
          <body>
            <Main />
            <NextScript />
            <script src={baseurl+"/js/bundle.min.js"}></script>
            <script src={baseurl+"/js/script.js"}></script>
            <script type="text/javascript" src={baseurl+"/js/slick.min.js"}></script>
     
           
            <script src={baseurl+"/js/custom/chkbx.js"}></script>
            <script src={baseurl+"/js/custom.js"}></script>
            
          </body>
        </Html>
      )
    }
  }
  
  export default MyDocument