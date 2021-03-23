import React  from 'react';

import Link from 'next/link';
import {useRouter} from 'next/router';
import Head from 'next/head';
import axios from "axios"; 
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProductEnquiryForm from './../productenquiry';


const ProductDiv =  (props)=>
 {
   
    
    console.log(props.slug);

        return (
            <div>
              {props.path}
       
        </div>
        );;
}

export default ProductDiv;
