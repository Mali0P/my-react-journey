import React from 'react'
import Header from './Header'
import { blogs } from './Data'
import { useLocation } from 'react-router-dom'
export default function BlogDeatils() {
    let uselocation =useLocation();
    let finalId= uselocation.pathname.split('/')[2]
let curData = blogs.filter((val)=>val.id==finalId)[0]

  return (
    <div>
        <Header/>
        <div>
            
                <h1>
                    {curData.title}
                </h1>
                <p>{curData.body}</p>
            
        </div>


    </div>
  )
}
