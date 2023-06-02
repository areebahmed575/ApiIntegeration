"use client"
import React from 'react'
import useSwr from "swr" 


const url='https://api.quotable.io/random?tags=technology';
const fetcher=(url:any)=>fetch(url).then((res)=>res.json())

export default  function Client() {
    const {data,error, isLoading} = useSwr(url,fetcher)
    if(error)return <div>error</div>
    if(isLoading)return <div>
        <h1>Client Side</h1>
        Loading..
        </div>
  
  return (
    <div>
      
        <h1>Client Side</h1>
        {data.content} 
        
       
      
    </div>
  )
}
