import React from 'react';
import axios from 'axios';
import { useState,useEffect } from 'react';


 export function useFetch(url) {
    const [data, setData]=useState(null)


useEffect(()=>{
    axios.get(url)
    .then(response=> {
    setData(response.data);
    })
},[])
 return {data}
}