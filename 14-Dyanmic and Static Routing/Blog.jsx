import React from 'react'
import Header from './Header'
import { Container } from 'postcss'
import { blogs } from './Data'
import { Link } from 'react-router-dom'
export default function () {
    let allBlogs = blogs.map((value,id)=>{
        return(
            <div className='blogItems' key={id}>
                <h2>{value.title}</h2>
                <p>{value.body}</p>
                <button><Link to={`/Blog/${value.id}`}>Read More</Link></button>
            </div>
        )
    })
  return (
    <div>

<Header/>
    <h1>Blog Page</h1>
    <div className='container'>
      {allBlogs}
     
    </div>
    </div>
  )
}
