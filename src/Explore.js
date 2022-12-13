import React, { useRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './explore.css'
import { Swiper, SwiperSlide } from "swiper/react";
import MoonLoader from "react-spinners/MoonLoader"
import Aos from 'aos';

import "swiper/css/navigation";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";



// import required modules
import { Pagination, Navigation } from "swiper";
import { Col } from 'react-bootstrap';
import "aos/dist/aos.css";
import Spinner from 'react-bootstrap/Spinner';

const Explore = () => {
 
  useEffect(() => {
    Aos.init({duration:2500});
  }, []);
  return (
    
    <div>
     
      <section className='secc1 '>
      <div className="row container" data-aos="fade-left">
        <div className="col-lg-12 do">
        <h6>Liberty NFT Market</h6>
        <h1>DISCOVER SOME TOP ITEMS</h1>
        <h5><span style={{color:"gray"}}><Link to="/Home">Home </Link></span>Explore</h5>
        </div>
      </div>
      </section>
   
      <section className='swiperr' >
      <Swiper
 breakpoints={{
  640: {
    
    slidesPerView: 1,
  },
  768: {
    
    slidesPerView: 3,
  },
}}

loop={true}
loopFillGroupWithBlank={true}
pagination={{
  clickable: true,
}}
navigation={true}
modules={[Pagination, Navigation]}
className="mySwiper"
>
<SwiperSlide>
<div className="container" data-aos="flip-right">
<div className="row ">
  <div className="col-lg-12 ">
 
<img src="images\featured-01.jpg"  class="image" />
<div className="middle">
<div className="text"><h4>Bored Ape Kennel Club</h4>
<br/>
<div className='fff'>
<img src='images\single-author.jpg'/>
<h6>Liberty Artist
<br/>
<span>@libertyart</span>
</h6>
</div>
</div>
</div>
</div>
  </div>
</div>
</SwiperSlide>
<SwiperSlide>
<div className="container" data-aos="flip-right">
<div className="row ">
  <div className="col-lg-12 ">
 
<img src="images\featured-02.jpg"  class="image" />
<div className="middle">
<div className="text"><h4>Bored Ape Kennel Club</h4>
<br/>
<div className='fff'>
<img src='images\single-author.jpg'/>
<h6>Liberty Artist
<br/>
<span>@libertyart</span>
</h6>
</div>
</div>
</div>
</div>
  </div>
</div>
</SwiperSlide>
<SwiperSlide>
<div className="container" data-aos="flip-right">
<div className="row ">
  <div className="col-lg-12 ">
 
<img src="images\featured-03.jpg"  class="image" />
<div className="middle">
<div className="text"><h4>Bored Ape Kennel Club</h4>
<br/>
<div className='fff'>
<img src='images\single-author.jpg'/>
<h6>Liberty Artist
<br/>
<span>@libertyart</span>
</h6>
</div>
</div>
</div>
</div>
  </div>
</div>
</SwiperSlide>
<SwiperSlide>
<div className="container" data-aos="flip-right">
<div className="row ">
  <div className="col-lg-12 ">
 
<img src="images\featured-04.jpg"  class="image" />
<div className="middle">
<div className="text"><h4>Bored Ape Kennel Club</h4>
<br/>
<div className='fff'>
<img src='images\single-author.jpg'/>
<h6>Liberty Artist
<br/>
<span>@libertyart</span>
</h6>
</div>
</div>
</div>
</div>
  </div>
</div>
</SwiperSlide>
<SwiperSlide>
<div className="container" data-aos="flip-right">
<div className="row ">
  <div className="col-lg-12 ">
 
<img src="images\featured-01.jpg"  class="image" />
<div className="middle">
<div className="text"><h4>Bored Ape Kennel Club</h4>
<br/>
<div className='fff'>
<img src='images\single-author.jpg'/>
<h6>Liberty Artist
<br/>
<span>@libertyart</span>
</h6>
</div>
</div>
</div>
</div>
  </div>
</div>
</SwiperSlide>
<SwiperSlide>
<div className="container" data-aos="flip-right">
<div className="row ">
  <div className="col-lg-12 ">
 
<img src="images\featured-04.jpg"  class="image" />
<div className="middle">
<div className="text"><h4>Bored Ape Kennel Club</h4>
<br/>
<div className='fff'>
<img src='images\single-author.jpg'/>
<h6>Liberty Artist
<br/>
<span>@libertyart</span>
</h6>
</div>
</div>
</div>
</div>
  </div>
</div>
</SwiperSlide>


</Swiper>
      </section>

      <section className='sec21 container'>
        <hr className='hr5'></hr>
        <br/>
       <div className='div55'>
        

       <h4>Discover Some Of Our<span style={{color:" rgb(43, 137, 226)"}}>Items.</span></h4>
       
       
     
         
 
      <select name="cars" id="cars">
    <option value="volvo">All Categories</option>
    <option value="saab">Music</option>
    <option value="opel">Digital</option>
    <option value="audi">Blockchain</option>
   </select>
        
      
    
       <select name="cars" id="cars">
         <option value="volvo">Ending Soon</option>
         <option value="saab">Music</option>
         <option value="opel">Digital</option>
         <option value="audi">Blockchain</option>
       </select>
         <button className='in2'>search </button>   
        </div> 
       
      </section>
      <br/>
      <br/>

      <section className='sec65 container'>
      <div className="row ">
       
          <Col lg="12" xl="4" data-aos="zoom-in">
            <div className='din11'>
             <div>
             <img className='im2' src='images\single-author.jpg'/>
                <img className='im3' src='images\discover-02.jpg'/>

             </div>
             <br/>
             <br/>
                <h5>Mutant Ape Bored</h5>
                <br/>
                <hr className='hht'/>
               <div className='dib'>
                <h6>
                Current Bid:
                <br/>
                <br/>
                8.16 ETH
                </h6>
                <h6>
                Category:
                <br/>
                <br/>
             Digital Art

                </h6>
               </div>
               <Link to="/ItemDetails">
            <button>View Details</button>
            </Link>
            </div>
          </Col>
          <Col lg="12" xl="4" data-aos="zoom-in">
            <div className='din11'>
             <div>
             <img className='im2' src='images\single-author.jpg'/>
                <img className='im3' src='images\discover-01.jpg'/>

             </div>
             <br/>
             <br/>
                <h5>Genesis Meta Boom</h5>
                <br/>
                <hr className='hht'/>
               <div className='dib'>
                <h6>
                Current Bid:
                <br/>
                <br/>
                8.16 ETH
                </h6>
                <h6>
                Category:
                <br/>
                <br/>
             Digital Art

                </h6>
               </div>
               <Link to="/ItemDetails">
            <button>View Details</button>
            </Link>
            </div>
          </Col>
          <Col lg="12" xl="4" data-aos="zoom-in">
            <div className='din11'>
             <div>
             <img className='im2' src='images\single-author.jpg'/>
                <img className='im3' src='images\discover-03.jpg'/>

             </div>
             <br/>
             <br/>
                <h5>His Other Half</h5>
                <br/>
                <hr className='hht'/>
               <div className='dib'>
                <h6>
                Current Bid:
                <br/>
                <br/>
                8.16 ETH
                </h6>
                <h6>
                Category:
                <br/>
                <br/>
             Digital Art

                </h6>
               </div>
               <Link to="/ItemDetails">
            <button >View Details</button>
            
            </Link>
            </div>
          </Col>
      </div>
      </section>
      <br></br>
      <section className='sec65 container'>
      <div className="row ">
       
      <Col lg="12" xl="4" data-aos="zoom-in">
            <div className='din11'>
             <div>
             <img className='im2' src='images\single-author.jpg'/>
                <img className='im3' src='images\discover-02.jpg'/>

             </div>
             <br/>
             <br/>
                <h5>Mutant Ape Bored</h5>
                <br/>
                <hr className='hht'/>
               <div className='dib'>
                <h6>
                Current Bid:
                <br/>
                <br/>
                8.16 ETH
                </h6>
                <h6>
                Category:
                <br/>
                <br/>
             Digital Art

                </h6>
               </div>
               <Link to="/ItemDetails">
            <button>View Details</button>
            </Link>
            </div>
          </Col>
          <Col lg="12" xl="4" data-aos="zoom-in">
            <div className='din11'>
             <div>
             <img className='im2' src='images\single-author.jpg'/>
                <img className='im3' src='images\discover-01.jpg'/>

             </div>
             <br/>
             <br/>
                <h5>Genesis Meta Boom</h5>
                <br/>
                <hr className='hht'/>
               <div className='dib'>
                <h6>
                Current Bid:
                <br/>
                <br/>
                8.16 ETH
                </h6>
                <h6>
                Category:
                <br/>
                <br/>
             Digital Art

                </h6>
               </div>
               <Link to="/ItemDetails">
            <button>View Details</button>
            </Link>
            </div>
          </Col>
          <Col lg="12" xl="4" data-aos="zoom-in">
            <div className='din11'>
             <div>
             <img className='im2' src='images\single-author.jpg'/>
                <img className='im3' src='images\discover-03.jpg'/>

             </div>
             <br/>
             <br/>
                <h5>His Other Half</h5>
                <br/>
                <hr className='hht'/>
               <div className='dib'>
                <h6>
                Current Bid:
                <br/>
                <br/>
                8.16 ETH
                </h6>
                <h6>
                Category:
                <br/>
                <br/>
             Digital Art

                </h6>
               </div>
               <Link to="/ItemDetails">
            <button>View Details</button>
            </Link>
            </div>
          </Col>
      </div>
      </section>
   <br></br>
   <br></br>
   <br></br>
      <section className='sec5b1'>
     <div className='container'>
    <div className='ht'>

      <h2>Our Top Sellers This Week.</h2>
    </div>
    <br/>
    <br/>
    <div className="row " data-aos="zoom-in-left">
    <Col lg="12" xl="3">
    <div className='gh1'>
      <h1>1.</h1>
      <img src='images\single-author.jpg'/>
      <h6>NFT Top Artist
        <br/>
      8.6 ETH or $12,000</h6>
    </div>
    </Col>
    <Col lg="12" xl="3">
    <div className='gh1'>
      <h1>4.</h1>
      <img src='images\single-author.jpg'/>
      <h6>NFT Top Artist
        <br/>
      8.6 ETH or $12,000</h6>
    </div>
    </Col>
    <Col lg="12" xl="3">
    <div className='gh1'>
      <h1>7.</h1>
      <img src='images\single-author.jpg'/>
      <h6>NFT Top Artist
        <br/>
      8.6 ETH or $12,000</h6>
    </div>
    </Col>
    <Col lg="12" xl="3">
    <div className='gh1'>
      <h1>10.</h1>
      <img src='images\single-author.jpg'/>
      <h6>NFT Top Artist
        <br/>
      8.6 ETH or $12,000</h6>
    </div>
    </Col>
    </div>
    <br/>
    <br/>
    <div className="row " data-aos="zoom-in">
    <Col lg="12" xl="3">
    <div className='gh1'>
      <h1>2.</h1>
      <img src='images\author-02.jpg'/>
      <h6>NFT Top Artist
        <br/>
      8.6 ETH or $12,000</h6>
    </div>
    </Col>
    <Col lg="12" xl="3">
    <div className='gh1'>
      <h1>5.</h1>
      <img src='images\author-02.jpg'/>
      <h6>NFT Top Artist
        <br/>
      8.6 ETH or $12,000</h6>
    </div>
    </Col>
    <Col lg="12" xl="3">
    <div className='gh1'>
      <h1>8.</h1>
      <img src='images\author-02.jpg'/>
      <h6>NFT Top Artist
        <br/>
      8.6 ETH or $12,000</h6>
    </div>
    </Col>
    <Col lg="12" xl="3">
    <div className='gh1'>
      <h1>11.</h1>
      <img src='images\author-02.jpg'/>
      <h6>NFT Top Artist
        <br/>
      8.6 ETH or $12,000</h6>
    </div>
    </Col>
    </div>
    <br/>
    <br/>
    <div className="row " data-aos="zoom-in-right">
    <Col lg="12" xl="3">
    <div className='gh1'>
      <h1>3.</h1>
      <img src='images\author-03.jpg'/>
      <h6>NFT Top Artist
        <br/>
      8.6 ETH or $12,000</h6>
    </div>
    </Col>
    <Col lg="12" xl="3">
    <div className='gh1'>
      <h1>6.</h1>
      <img src='images\author-03.jpg'/>
      <h6>NFT Top Artist
        <br/>
      8.6 ETH or $12,000</h6>
    </div>
    </Col>
    <Col lg="12" xl="3">
    <div className='gh1'>
      <h1>9.</h1>
      <img src='images\author-03.jpg'/>
      <h6>NFT Top Artist
        <br/>
      8.6 ETH or $12,000</h6>
    </div>
    </Col>
    <Col lg="12" xl="3">
    <div className='gh1'>
      <h1>12.</h1>
      <img src='images\author-03.jpg'/>
      <h6>NFT Top Artist
        <br/>
      8.6 ETH or $12,000</h6>
    </div>
    </Col>
    </div>
    <br/>
    <br/>
    <br/>
    <br/>
  
     </div>
     
      </section>
      
    </div>
  )
}


export default Explore


