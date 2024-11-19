import React, { useEffect } from 'react'
import './marquee.css'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
export default function Marquee() {

  useGSAP(()=>{
    gsap.to('.hello',{
transform:'translateX(-200%)',
duration:2,
ease:'none',
repeat:-1
    })
  })
  

  return (
    <div className='container'>
<div className="showMarquee">
  <div className='hello'>
  <h1>{`Mali0P -> Mali0P -> Mali0P ->`}</h1>
    </div>
  <div className='hello'>
  <h1>{`Mali0P -> Mali0P -> Mali0P ->`}</h1>
    </div>
  <div className='hello'>
  <h1>{`Mali0P -> Mali0P -> Mali0P ->`}</h1>
    </div>
  <div className='hello'>
  <h1>{`Mali0P -> Mali0P -> Mali0P ->`}</h1>
    </div>
  <div className='hello'>
  <h1>{`Mali0P -> Mali0P -> Mali0P ->`}</h1>
    </div>
</div>
    </div>
  )
}
