import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import "aos/dist/aos.css";
import Aos from 'aos';
import MoonLoader from "react-spinners/MoonLoader"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./Home.css";

// import required modules
import { Navigation } from "swiper";
import Homeb from './Homeb';
import Footer from './Footer';
import Explore from './Explore';
const Home = () => {
  useEffect(() => {
    Aos.init({duration:1500});
  }, []);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [])
  return (
    <div className='Home'>
       
      <div className='in1'>
      <img className='img1' src='images\banner-bg.jpg'/>
      </div>
      <section className='sec1 container'>
        <div className='div1' >
         <h6>Liberty NFT Market</h6>
         <h1>CREATE, SELL &
          <br/>
          COLLECT TOP NFT’S.
         </h1>
         <br/>
         <h6>Liberty NFT Market is a really cool and professional design
         <br/>
         <br/>
           for your NFT websites.This HTML CSS template is based on Bootstrap
           <br/>
           <br/>
           v5 and it is designed for NFT related web portals. Liberty can be 
           <br/>
           <br/>
           freely downloaded from TemplateMo's free css templates.</h6>
           <br/>
           <div className='btn'>
          
           
            <Link to="/Explore">
            <button className='bt1'>Explore Top NFTs</button>
            </Link>
            <button className='bt2' type='supmit'>Watch Our Videos</button>
           </div>
        </div>
        <div className='div2' data-aos="fade-left">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide><img src='images\banner-01.png'/></SwiperSlide>
        <SwiperSlide><img src='images\banner-02.png'/></SwiperSlide>
        
       
      </Swiper>
          </div>
      </section>
     
  
     
      <div className='dih1 container '>
        <hr className='hr'></hr>
      <h1>Browse Through Our <span>Categories</span> Here.</h1>
      </div>

      <section className='sec4 container' >
      <div class="col-lg-2 col-sm-6" data-aos="flip-left">
                <div class="item">
                  <div class="icon">
                    <img src="images\icon-01.png" alt=""/>
                  </div>
                  <h4>Blockchain</h4>
                  <div class="icon-button">
                    <a href="#"><i class="fa fa-angle-right"></i></a>
                  </div>
                </div>
              </div>
              <div class="col-lg-2 col-sm-6" data-aos="flip-left">
                <div class="item">
                  <div class="icon">
                    <img src="images\icon-02.png" alt=""/>
                  </div>
                  <h4>Digital Art</h4>
                  <div class="icon-button">
                    <a href="#"><i class="fa fa-angle-right"></i></a>
                  </div>
                </div>
              </div>
              <div class="col-lg-2 col-sm-6" data-aos="flip-left">
                <div class="item">
                  <div class="icon">
                    <img src="images\icon-03.png" alt=""/>
                  </div>
                  <h4>Music Art</h4>
                  <div class="icon-button">
                    <a href="#"><i class="fa fa-angle-right"></i></a>
                  </div>
                </div>
              </div>
              <div class="col-lg-2 col-sm-6" data-aos="flip-left">
                <div class="item">
                  <div class="icon">
                    <img src="images\icon-04.png" alt=""/>
                  </div>
                  <h4>Virtual World</h4>
                  <div class="icon-button">
                    <a href="#"><i class="fa fa-angle-right"></i></a>
                  </div>
                </div>
              </div>
              <div class="col-lg-2 col-sm-6" data-aos="flip-left">
                <div class="item">
                  <div class="icon">
                    <img src="images\icon-05.png" alt=""/>
                  </div>
                  <h4>Valuable</h4>
                  <div class="icon-button">
                    <a href="#"><i class="fa fa-angle-right"></i></a>
                  </div>
                </div>
              </div>
              <div class="col-lg-2 col-sm-6" data-aos="flip-left">
                <div class="item">
                  <div class="icon">
                    <img src="images\icon-06.png" alt=""/>
                  </div>
                  <h4>Triple NFT</h4>
                  <div class="icon-button">
                    <a href="#"><i class="fa fa-angle-right"></i></a>
                  </div>
                </div>
              </div>
      </section>
      <div className='dih1 container ' style={{position: "relative", top:"185px"}}>
        <hr className='hr'></hr>
      <h1>Browse Through Our <span>Categories</span> Here.</h1>
      </div>

    <Homeb/>

    <section className='sec6 ' data-aos="flip-left">
      <div>
      <hr className='hr3'></hr>
      <div className='div7'>
      <h1>Create Your NFT & Put It On The Market.</h1>
      <Link to="/CreateYours">
      <button>Create Your NFT Now</button>
      </Link>
      </div>
      <br/>
      <br/>
      <br/>
      <div className='secd'>
        <div className='infe' data-aos="fade-left">
          <img src='images\icon-02.png'/>
          <br/>
          <br/>
          <h2>Set Up Your Wallet</h2>
          <br/>
          <br/>
          <h6>NFT means Non-Fungible Token that are used in digital 
            <br/>
            <br/>
            cryptocurrency markets. There are many different kinds
            <br/>
            <br/>
             of NFTs in the industry.</h6>
        </div>
        <div className='infe' data-aos="fade-up">
          <img src='images\icon-04.png'/>
          <br/>
          <br/>
          <h2>Add Your Digital NFT</h2>
          <br/>
          <br/>
          <h6>There are 5 different HTML pages included in
            <br/>
            <br/>
            this NFT website template. You can edit or
            <br/>
            <br/>
            modify any section on any page as you required.</h6>
        </div>
        <div className='infe' data-aos="fade-right">
          <img src='images\icon-06.png'/>
          <br/>
          <br/>
          <h2>Sell Your NFT & Make
            <br/>
             Profit</h2>
          <br/>
          <br/>
          <h6>If you would like to support our TemplateMo 
            <br/>
            <br/>
            website, please visit our contact page to make a
            <br/>
            <br/>
             of NFTs in the industry.</h6>
        </div>
      </div>
      </div>
    </section>


    <section className='sec7'>
      <h1 className='container'><span style={{color:"#7453fc"}}>Items</span> Currently In The Market.</h1>
      <br/>
      <br/>
      <section className='sec44 '>
      <div className='sec8'  data-aos="fade-left">
        <div className='se8'>
            <img src='images\market-01.jpg'/>
        </div>
        <div>
          <h3>Music Art Super Item</h3>
          <div className='div99'>
            <img src='images\single-author.jpg'/>
            <h4>Liberty Artist
              <br></br>
             <span style={{color:"#7453fc"}}> @libertyart</span>
            </h4>
          </div>
          <hr className='hr3'/>
          
          <h5>Current Bid</h5>
              <h5>2.03 ETH</h5>
              <h5>($8,240.50)</h5>
              <br/>
             
              <div className='div5'>
                <div>
                <Link to="/ItemDetails">
                  <h5 style={{color:"#7453fc"}}>item</h5>
                  </Link>
                  <Link to="/ItemDetails">
                  <h5 style={{color:"#7453fc"}}>View</h5>
                  </Link>
                  <Link to="/ItemDetails">
                  <h5 style={{color:"#7453fc" }}>Details</h5>
                  </Link>
               
                </div>
                 <div>
                  <h4>Ends In</h4>
                  <h5>4D 08H 15M 42S</h5>
                  <h5>(July 24th, 2022)</h5>
                 </div>
              </div>
        </div>
      </div>
      <div className='sec8' data-aos="fade-right">
        <div className='se8'>
            <img src='images\market-01.jpg'/>
        </div>
        <div>
          <h3>Music Art Super Item</h3>
          <div className='div99'>
            <img src='images\single-author.jpg'/>
            <h4>Liberty Artist
              <br></br>
             <span style={{color:"#7453fc"}}> @libertyart</span>
            </h4>
          </div>
          <hr className='hr3'/>
          
          <h5>Current Bid</h5>
              <h5>2.03 ETH</h5>
              <h5>($8,240.50)</h5>
              <br/>
             
              <div className='div5'>
                <div>
                <Link to="/ItemDetails">
                  <h5 style={{color:"#7453fc"}}>item</h5>
                  </Link>
                  <Link to="/ItemDetails">
                  <h5 style={{color:"#7453fc"}}>View</h5>
                  </Link>
                  <Link to="/ItemDetails">
                  <h5 style={{color:"#7453fc" }}>Details</h5>
                  </Link>
               
                </div>
                 <div>
                  <h4>Ends In</h4>
                  <h5>4D 08H 15M 42S</h5>
                  <h5>(July 24th, 2022)</h5>
                 </div>
              </div>
        </div>
      </div>
      </section>
      <section className='sec44 '  style={{position: "relative" , top:"30px"}}>
      <div className='sec8'  data-aos="fade-left">
        <div className='se8'>
            <img src='images\market-01.jpg'/>
        </div>
        <div>
          <h3>Music Art Super Item</h3>
          <div className='div99'>
            <img src='images\single-author.jpg'/>
            <h4>Liberty Artist
              <br></br>
             <span style={{color:"#7453fc"}}> @libertyart</span>
            </h4>
          </div>
         <hr className='hr3'/>
          
          <h5>Current Bid</h5>
              <h5>2.03 ETH</h5>
              <h5>($8,240.50)</h5>
              <br/>
             
              <div className='div5'>
                <div>
                <Link to="/ItemDetails">
                  <h5 style={{color:"#7453fc"}}>item</h5>
                  </Link>
                  <Link to="/ItemDetails">
                  <h5 style={{color:"#7453fc"}}>View</h5>
                  </Link>
                  <Link to="/ItemDetails">
                  <h5 style={{color:"#7453fc" }}>Details</h5>
                  </Link>
               
                </div>
                 <div>
                  <h4>Ends In</h4>
                  <h5>4D 08H 15M 42S</h5>
                  <h5>(July 24th, 2022)</h5>
                 </div>
              </div>
        </div>
      </div>
      <div className='sec8' data-aos="fade-right">
        <div className='se8'>
            <img src='images\market-01.jpg'/>
        </div>
        <div>
          <h3>Music Art Super Item</h3>
          <div className='div99'>
            <img src='images\single-author.jpg'/>
            <h4>Liberty Artist
              <br></br>
             <span style={{color:"#7453fc"}}> @libertyart</span>
            </h4>
          </div>
          <hr className='hr3'/>
          
          <h5>Current Bid</h5>
              <h5>2.03 ETH</h5>
              <h5>($8,240.50)</h5>
              <br/>
             
              <div className='div5'>
                <div>
                <Link to="/ItemDetails">
                  <h5 style={{color:"#7453fc"}}>item</h5>
                  </Link>
                  <Link to="/ItemDetails">
                  <h5 style={{color:"#7453fc"}}>View</h5>
                  </Link>
                  <Link to="/ItemDetails">
                  <h5 style={{color:"#7453fc" }}>Details</h5>
                  </Link>
               
                </div>
                 <div>
                  <h4>Ends In</h4>
                  <h5>4D 08H 15M 42S</h5>
                  <h5>(July 24th, 2022)</h5>
                 </div>
              </div>
        </div>
      </div>
      </section>
      <section className='sec44  ' style={{position: "relative" , top:"60px"}}>
      <div className='sec8 '  data-aos="fade-left">
        <div className='se8'>
            <img src='images\market-01.jpg'/>
        </div>
        <div>
          <h3>Music Art Super Item</h3>
          <div className='div99'>
            <img src='images\single-author.jpg'/>
            <h4>Liberty Artist
              <br></br>
             <span style={{color:"#7453fc"}}> @libertyart</span>
            </h4>
          </div>
          <hr className='hr3'/>
          
          <h5>Current Bid</h5>
              <h5>2.03 ETH</h5>
              <h5>($8,240.50)</h5>
              <br/>
             
              <div className='div5'>
                <div>
                <Link to="/ItemDetails">
                  <h5 style={{color:"#7453fc"}}>item</h5>
                  </Link>
                  <Link to="/ItemDetails">
                  <h5 style={{color:"#7453fc"}}>View</h5>
                  </Link>
                  <Link to="/ItemDetails">
                  <h5 style={{color:"#7453fc" }}>Details</h5>
                  </Link>
               
                </div>
                 <div>
                  <h4>Ends In</h4>
                  <h5>4D 08H 15M 42S</h5>
                  <h5>(July 24th, 2022)</h5>
                 </div>
              </div>
        </div>
      </div>
      <div className='sec8'data-aos="fade-right" >
        <div className='se8' >
            <img src='images\market-01.jpg'/>
        </div>
        <div>
          <h3>Music Art Super Item</h3>
          <div className='div99'>
            <img src='images\single-author.jpg'/>
            <h4>Liberty Artist
              <br></br>
             <span style={{color:"#7453fc"}}> @libertyart</span>
            </h4>
          </div>
          <hr className='hr3'/>
          
          <h5>Current Bid</h5>
              <h5>2.03 ETH</h5>
              <h5>($8,240.50)</h5>
              <br/>
             
              <div className='div5'>
                <div>
                <Link to="/ItemDetails">
                  <h5 style={{color:"#7453fc"}}>item</h5>
                  </Link>
                  <Link to="/ItemDetails">
                  <h5 style={{color:"#7453fc"}}>View</h5>
                  </Link>
                  <Link to="/ItemDetails">
                  <h5 style={{color:"#7453fc" }}>Details</h5>
                  </Link>
               
                </div>
                 <div>
                  <h4>Ends In</h4>
                  <h5>4D 08H 15M 42S</h5>
                  <h5>(July 24th, 2022)</h5>
                 </div>
              </div>
        </div>
      </div>
      </section>
    </section>
   <Footer/>

    </div>
  )
}

export default Home