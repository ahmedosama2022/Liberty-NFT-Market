
import './homeb.css'
import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper,} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import Aos from 'aos';


// import required modules
import "aos/dist/aos.css";
const Homeb = () => {
  useEffect(() => {
    Aos.init({duration:2000});
  }, []);
  return (
    <div className='Homeb'>
          <section className='sec5 container'>
    
     
        <div className='sdiv1' data-aos="flip-down">
          <img className='imj' src='images\collection-01.jpg'/>
         <div className='info'>
         <h1>Bored Ape Kennel Club</h1>
          <hr className='hr2'></hr>
          <div className='sdiv5'>
            <div>
               <h5>Items In Collection:</h5>
               <strong>324/324</strong>
            </div>
            <div>
              <h5>Category:</h5>
              <strong>Visual Art</strong>
            </div>
             
          </div>
          <button>Bored Ape Kennel Club</button>
         </div>
          </div>
          <div className='sdiv1' data-aos="flip-down">
          <img className='imj' src='images\collection-01.jpg'/>
         <div className='info'>
         <h1>Bored Ape Kennel Club</h1>
          <hr className='hr2'></hr>
          <div className='sdiv5'>
            <div>
               <h5>Items In Collection:</h5>
               <strong>324/324</strong>
            </div>
            <div>
              <h5>Category:</h5>
              <strong>Visual Art</strong>
            </div>

          </div>
          <button>Bored Ape Kennel Club</button>
         </div>
          </div>

          <div className='sdiv1' data-aos="flip-down">
          <img className='imj' src='images\collection-01.jpg'/>
         <div className='info'>
         <h1>Bored Ape Kennel Club</h1>
          <hr className='hr2'></hr>
          <div className='sdiv5'>
            <div>
               <h5>Items In Collection:</h5>
               <strong>324/324</strong>
            </div>
            <div>
              <h5>Category:</h5>
              <strong>Visual Art</strong>
            </div>

          </div>
          <button>Bored Ape Kennel Club</button>
         </div>
          </div>
         
        
          
     
        
      </section>
    </div>
  )
}

export default Homeb