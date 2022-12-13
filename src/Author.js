import React,{useEffect} from 'react'
import './author.css'
import { Link } from 'react-router-dom'
import { Col } from 'react-bootstrap'
import { BsFillHeartFill } from 'react-icons/bs';
import { FaHandPaper } from 'react-icons/fa';
import { CgDollar } from 'react-icons/cg';
import Aos from 'aos';

const Author = () => {
  useEffect(() => {
    Aos.init({duration:1500});
  }, []);
  return (
    <div className='Author'>
        <section className='secc1 '>
      <div className="row container" data-aos="fade-left">
        <div className="col-lg-12 do">
        <h6>Author Details</h6>
        <h1>VIEW DETAILS FOR AUTHOR</h1>
        <h5><span style={{color:"gray"}}><Link to="/Home">Home </Link></span>Author</h5>
        <br/>
        <br/>
        <br/>
       <div className='ex1'>
       <Link to="/Explore">
        <button className='bh1'>Explore Our Items</button>
        </Link>
        <Link to="/CreateYours">
        <button className='bh2'>Create Your NFT</button>
        </Link>
       </div>
        </div>
      </div>
      </section>

      <section className='sec51'>
       <div className='container'>
         <div className="row ">
            <Col lg="12" xl="6"  data-aos="fade-left">
               <div className='fg12'>
                <img src='images/single-author.jpg'/>
                <h4>Melanie Smith
                  <br/>
                <span><h6 style={{color:"#7453fc"}}>@melanie32</h6></span></h4>
               </div>
            </Col>
            <Col lg="12" xl="6"  data-aos="fade-right">
             <div className='hkl1'>
              <div className='ico'>
                <div>
                <BsFillHeartFill style={{color:"#7453fc" , fontSize:"25px"}}/>
                <h6><span style={{color:"#7453fc"}}>1238</span> Likes</h6>
                </div>
                <div>
                <FaHandPaper style={{color:"#7453fc" , fontSize:"25px"}}/>
                <h6><span style={{color:"#7453fc"}}>1238</span> Likes</h6>
                </div>
                <div>
                <CgDollar style={{color:"#7453fc" , fontSize:"25px"}}/>
                <h6><span style={{color:"#7453fc"}}>1238</span> Likes</h6>
                </div>
               

              </div>
              <br/>
              <br/>
              <div className='ghk'>
                  <h4>559 Followers</h4>
                  <button>Follow @Melanie32</button>
                </div>
             </div>
            </Col>
          </div>
        </div>
      </section>
      <section className='sec91'>
       <div className='container'>
         <div className="row ">
            <Col lg="12" xl="6">
               <div className='f12'>
               
                <h3>Melanie Smith’s  <span style={{color:"#7453fc"}}>Items.</span></h3>
               </div>
            </Col>
            
            <section className='sec65 container' style={{ marginTop: "50px"}}>
      <div className="row ">
       
          <Col lg="12" xl="4" data-aos="flip-right">
            <div className='din11'>
             <div>
             <img className='im2' src='images/author.jpg'/>
                <img className='im3' src='images/discover-01.jpg'/>

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
          <Col lg="12" xl="4" data-aos="flip-right">
            <div className='din11'>
             <div>
             <img className='im2' src='images/author.jpg'/>
                <img className='im3' src='images/discover-02.jpg'/>

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
          <Col lg="12" xl="4" data-aos="flip-right">
            <div className='din11'>
             <div>
             <img className='im2' src='images/author.jpg'/>
                <img className='im3' src='images/discover-03.jpg'/>

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
     
            
                </div>
               

              </div>
              </section>

              <section className='sec66 ' data-aos="zoom-in-right">
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
        <div className='infe'>
          <img src='images/icon-02.png'/>
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
        <div className='infe'>
          <img src='images/icon-04.png'/>
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
        <div className='infe'>
          <img src='images/icon-06.png'/>
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
    </div>
  )
}

export default Author